import React from "react";
import { DieShape } from "../styles/Styled";

export default class Die extends React.Component {
  render() {
  
    return (
      <DieShape bg={this.props.isHeld ? "#59E391" : "white"} onClick={this.props.holdDice}>
        <h2  >{this.props.value}</h2>
      </DieShape>
    );
  }
}
