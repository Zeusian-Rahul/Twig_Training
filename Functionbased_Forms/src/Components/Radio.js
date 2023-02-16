import React from "react";

export const Radio=(props)=> {
   console.log("Radio")
   return (
    <fieldset>
    <legend>Choose the Train Type</legend>

    <input 
    type="radio" 
    id="fast"
    name="speed"
    value="fast"
    checked={props.val==="fast"}
    onChange={props.handleChoice}/>
    <label htmlFor="fast">SuperFast</label>
    <br />

    <input 
    type="radio" 
    id="slow"
    name="speed"
    value="slow"
    checked={props.val==="slow"}
    onChange={props.handleChoice}/>
    <label htmlFor="slow">Passenger</label>
    <br />

    <input 
    type="radio" 
    id="local"
    name="speed"
    value="local"
    checked={props.val==="local"}
    onChange={(event)=>props.handleChoice(event)}/>
    <label htmlFor="local">Local</label>
    <br />
</fieldset>
   )
}