import React, { Component } from "react";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";
import Die from "./Components/Die";
import "./App.css";
import { Wrap } from "./styles/Styled";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dice: this.allNewDice(), //[{},{}]
      tenzies: false,
      count:0
    };
  }

  generateNewDice = () => {
    return {
      value: Math.round(Math.random() * 5 + 1),
      isHeld: false,
      id: nanoid(),
    };
  };

  allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) newDice.push(this.generateNewDice());
    return newDice;
  };

  componentDidUpdate(prevProps, prevState) {
    // const allHeld = this.state.dice.every((die) => die.isHeld);
    // const firstValue = this.state.dice[0].value;
    // const allSameValue = this.state.dice.every(
    //   (die) => die.value === firstValue
    // );
    // if (allHeld && allSameValue && prevState.tenzies===this.state.tenzies) {
    //   this.setState({dice:this.state.dice,tenzies:true});
    // }
    // if(this.state.tenzies)
    // console.log("You won!");


    if(prevState.dice!==this.state.dice){
      
    let check = true;
    for (let i = 0; i < 10; i++)
      check =
        check &&
        this.state.dice[i].isHeld === true &&
        this.state.dice[i].value === this.state.dice[0].value;
        if (check) {
            this.setState({dice:this.state.dice,tenzies:true});
            if (this.state.tenzies) {
              console.log(prevState.dice)
              console.log(this.state.dice)
            }
          }
 }
    
  }

  rollDice = () => {
    this.setState((prevState) => ({
      dice: prevState.dice.map((die) => {
        return die.isHeld
        ? die
        : this.generateNewDice();
      }),
      count:prevState.count+1
    }));
    // if(!this.state.tenzies)
    // {
    //   this.setState((prevState) => ({
    //     dice: prevState.dice.map((die) => {
    //       return die.isHeld
    //       ? die
    //       : this.generateNewDice();
    //     }),
    //     count:prevState.count+1
    //   }));
    // }
    // else
    // {
    //   this.setState({dice:this.allNewDice(),
    //   tenzies:false,
    // count:0})
    // }
    };
  holdDice = (id) => {
    // const modifiedArray=this.state.dice.map(die=> {
    //   return id === die.id ? { ...die, isHeld: !die.isHeld } : die;
    // })
    // this.setState({dice:modifiedArray})

    // this.setState({dice:this.state.dice.map((die) => {
    //   return id === die.id ? { ...die, isHeld: !die.isHeld } : die;
    // })})

    this.setState((oldState) => ({
      dice: oldState.dice.map((die) => {
        return id === die.id ? { ...die, isHeld: !die.isHeld } : die;
      }),
    }));
  };

  render() {
    const showDice = this.state.dice.map((ele) => (
      <Die
        key={ele.id}
        isHeld={ele.isHeld}
        value={ele.value}
        holdDice={() => this.holdDice(ele.id)}
      />
    ));
    return (
      <Wrap>
        {this.state.tenzies && <Confetti />}
        {this.state.tenzies && <h2>Your Score:{this.state.count}</h2>}
        <h1 className="title">Tenzies</h1>
        
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div>{showDice}</div>
        <button className="bn54" onClick={this.rollDice}>
          <span className="bn54span">{this.state.tenzies?"New Game":"Roll"}</span>
        </button>
      </Wrap>
    );
  }
}
