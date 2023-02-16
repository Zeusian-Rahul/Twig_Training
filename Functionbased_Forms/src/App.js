import './App.css';
import {Radio} from './Components/Radio';
import React  from 'react';

function App() {
 
  const [filled, setFilled] = React.useState({
    firstName:"",
    email:"",
    comment:"",
    isRemember:false,
    speed:""
  })
  function handleChange(event){
    const {name,value,checked,type}=event.target;
    setFilled(prevState=>{
      
      return {
        ...prevState,
        [name]:type==="checkbox"?checked:value
      }
    })
  }
  console.log(filled)

  function handleSubmit(event){
    event.preventDefault()
    console.log(filled)
  }

  return (
   <form onSubmit={handleSubmit}>
    <fieldset>
       <legend>Practice Form</legend>

         <input 
         type="text" 
         placeholder='FirstName'
         name="firstName"
         value={filled.firstName}
         onChange={handleChange}/>
         <br />

         <input 
         type="email" 
         placeholder='Email'
         name='email'
         value={filled.email}
         onChange={handleChange}/>
         <br />
         <textarea 
         placeholder='Comment It'
         name='comment'
         value={filled.comment}
         onChange={handleChange}
         />
         <br />

         <input 
         type="checkbox" 
         id="checkId"
         name='isRemember'
         checked={filled.isRemember}
         onChange={handleChange}
         />
         <label htmlFor="checkId">Remember Me</label>

         <Radio val={filled.speed} handleChoice={handleChange} />

         <button>Booked</button>
    </fieldset>
   </form>
  );
}

export default App;
