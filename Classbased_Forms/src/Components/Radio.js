import React from "react";
import Choice from "./Choice";
export const Radio = (props) => {
  console.log("Radio Mounted");
  //    const [berth,setBerth]=React.useState(false);
  let berth = props.val === "fast" ? true : false;
  return (
    <fieldset key="check1">
      <legend>Choose the Train Type</legend>

      <input
        type="radio"
        id="fast"
        name="speed"
        value="fast"
        checked={props.val === "fast"}
        onChange={props.handleChoice}
      />
      <label htmlFor="fast">SuperFast</label>
      <br />

      <input
        type="radio"
        id="slow"
        name="speed"
        value="slowpassenger"
        checked={props.val === "slowpassenger"}
        onChange={props.handleChoice}
      />
      <label htmlFor="slow">Passenger</label>
      <br />

      <input
        type="radio"
        id="local"
        name="speed"
        value="local"
        checked={props.val === "local"}
        onChange={(event) => props.handleChoice(event)}
      />
      <label htmlFor="local">Local</label>
      <br />
      {berth && <Choice />}
    </fieldset>
  );
};
