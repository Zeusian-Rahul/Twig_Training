import "./App.css";
import { Radio } from "./Components/Radio";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("ticketform")) || {
      firstName: "",
      email: "",
      comment: "",
      isRemember: false,
      speed: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, checked, type } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  }

  componentDidMount() {
    console.log("App Mounted");
  }

  componentDidUpdate() {
    console.log("App Updated");
    localStorage.setItem("ticketform", JSON.stringify(this.state));
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    console.log("Rahul");
    return (
      <form onSubmit={this.handleSubmit} key="check">
        <fieldset>
          <legend>Practice Form</legend>

          <input
            type="text"
            placeholder="FirstName"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            placeholder="Comment It"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <br />

          <input
            type="checkbox"
            id="checkId"
            name="isRemember"
            checked={this.state.isRemember}
            onChange={this.handleChange}
          />
          <label htmlFor="checkId">Remember Me</label>

          <Radio val={this.state.speed} handleChoice={this.handleChange} />

          <button>Booked</button>
        </fieldset>
      </form>
    );
  }
}
