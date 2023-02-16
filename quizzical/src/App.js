import React, { Component } from "react";
import Start from "./components/Start";
import Content from "./components/Content";

import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      content: false,
    };
  }

  change = () => {
    this.setState((prevstate) => (prevstate.content = true));
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start/>}></Route>
            <Route path="/quiz" element={<Content />}></Route>
          </Routes>
        </BrowserRouter>
      
      </div>
    );
  }
}
