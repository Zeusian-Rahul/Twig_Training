import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../style/Start-styled";
import { GlobalStyled } from "../style/GlobalStyled";
import { Start_svg } from "./SVG";
export default class Start extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyled />
        <Wrapper>
          <h1 className="start-heading">Quizzical</h1>
          <p className="start-description">App for Quiz</p>
          <Link to="/quiz">
            <button className="start-button">Start Quiz</button>
          </Link>
          <Start_svg/>
        </Wrapper>
      </React.Fragment>
    );
  }
}
