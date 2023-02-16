import React, { Component } from "react";
import "../style/Content.js";
import { Wrapper } from "../style/Display-styled";
export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
    };
    const { id, question, options, pass, correct, selected } = props;
  }

  handleClick = (current) => {
    this.props.pass(this.props.id, current);
    // console.log(current);
    this.setState((prevstate) => ({
      ...prevstate,
      selected: current,
    }));
  };

  toDisplay = () => {
    return this.props.options.map((item, index) =>
      !this.props.submit ? (
        <button
          key={index}
          style={{
            border: this.state.selected === item ? "none" : "",
            backgroundColor:
              this.state.selected === item ? "#D6DBF5" : "#F5F7FB",
          }}
          onClick={() => this.handleClick(item)}
          className="display-opt"
        >
          <div dangerouslySetInnerHTML={{ __html:  item  }} />
        </button>
      ) : (
        <button
          key={index}
          style={{
            border:
              this.props.selected === item || this.props.correct === item
                ? "none"
                : "",
            backgroundColor:
              (this.props.selected === this.props.correct &&
                this.props.correct === item) ||
              this.props.correct === item
                ? "#94D7A2"
                : this.props.selected === item
                ? "#F8BCBC"
                : "#F5F7FB",
          }}
          className="display-opt"
        >
          <div dangerouslySetInnerHTML={{ __html:  item  }} />
        </button>
      )
    );
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Wrapper>
          <p
            className="display-ques"
            dangerouslySetInnerHTML={{ __html: this.props.question }}
          />
          {this.toDisplay()}
        </Wrapper>
      </React.Fragment>
    );
  }
}
