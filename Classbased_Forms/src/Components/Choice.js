import React from "react";

export default class Choice extends React.Component {
  state = {
    favColor: "choice",
  };
  handleChange = (event) => {
    this.setState({
      favColor: event.target.value,
    });
  };

  componentDidMount() {
    console.log("Choice Mounted");
  }

  componentWillUnmount() {
    console.log("Choice Unmounted");
  }

  render() {
    return (
      <select
        id="favColor"
        value={this.state.favColor}
        onChange={this.handleChange}
        name="favColor"
        key="check2"
      >
        <option value="choice">--Choice</option>
        <option value="upper">Upper</option>
        <option value="lower">Lower</option>
        <option value="middle">Middle</option>
      </select>
    );
  }
}
