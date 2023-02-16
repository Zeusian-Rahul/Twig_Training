import React, { Component } from "react";
import Display from "./Display";
import { Wrap } from "../style/Content.js";
import { nanoid } from "nanoid";
import { GlobalStyled } from "../style/GlobalStyled";
import { Content_svg } from "./SVG";

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      quizdata: [
        {
          id: null,
          question: "",
          correct_answer: "",
          options: [],
          selected_answer: "",
        },
      ],
      submit: false,
      score: 0,
    };

    fetch("https://opentdb.com/api.php?amount=5&type=multiple&category=21")
      .then((res) => res.json())
      .then((data) => this.extract(data.results));
  }

  extract = (data) => {
    // console.log("hii");
    let final = [];
    data.map((data) => {
      let newarray = [...data.incorrect_answers, data.correct_answer];
      let num = Math.round(Math.random() * 2);
      let correctone = newarray[3];
      newarray[3] = newarray[num];
      newarray[num] = correctone;
      final.push({
        id: nanoid(),
        question: data.question,
        correct_answer: newarray[num],
        options: newarray,
        selected_answer: "",
      });
    });

    // console.log(final);
    this.setState((prevState) => ({
      quizdata: final,
      submit: false,
      score: 0,
    }));

    // console.log("below");
  };

  onSubmit = () => {
    this.setState((prevState) => ({
      submit: !prevState.submit,
    }));
    this.state.quizdata.map((ele) => {
      if (ele.correct_answer === ele.selected_answer)
        this.setState((prevState) => ({ score: prevState.score + 1 }));
    });
  };

  handleChange = (id, select) => {
    // console.log(id, select);
    this.setState((prevState) => ({
      quizdata: prevState.quizdata.map((data) => ({
        ...data,
        selected_answer: id === data.id ? select : data.selected_answer,
      })),
    }));
  };

  // componentDidMount() {
  //   // console.log("mount");
  //   fetch("https://opentdb.com/api.php?amount=15&type=multiple")
  //     .then((res) => res.json())
  //     .then((data) => this.extract(data.results));
  // }

  onAgain = () => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple&category=21")
      .then((res) => res.json())
      .then((data) => this.extract(data.results));
  };

  render() {
    // console.log(this.state);
    // this.dekhlo()
    const items = this.state.quizdata.map((ele) => (
      <Display
        key={ele.id}
        id={ele.id}
        question={ele.question}
        options={ele.options}
        pass={this.handleChange}
        correct={ele.correct_answer}
        selected={ele.selected_answer}
        submit={this.state.submit}
      />
    ));
    // console.log(items)
    return (
      <React.Fragment>
        <GlobalStyled />
        <Wrap>
          {[items]}
          <Content_svg />
          <div className="result">
            {this.state.submit && <p>Your Score is {this.state.score}/5</p>}

            {this.state.submit && (
              <button onClick={() => this.onAgain()}>Play Again</button>
            )}
          </div>

          {!this.state.submit && this.state.quizdata[0].options.length > 1 && (
            <button className="btn" onClick={() => this.onSubmit()}>
              Check Answer
            </button>
          )}
        </Wrap>
      </React.Fragment>
    );
  }
}
