import './App.css';
import  WindowTracker from './Components/WindowTracker';
import React from 'react';

 class App extends React.Component {
 constructor(){
  super();
  this.state={
    show:true
  }
  this.toggle=this.toggle.bind(this);
 }


  toggle(){
    this.setState(prevstate=>({
      show:!prevstate.show
    }))
  }
render(){
  return (
    <div className='container'>
       <button onClick={this.toggle
      }>Toggle WindowTracker</button>
    {this.state.show && <WindowTracker />}
    </div>
  )
}
}
export default App


