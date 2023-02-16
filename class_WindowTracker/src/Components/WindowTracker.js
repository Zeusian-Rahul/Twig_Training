import React from 'react'

export default class WindowTracker extends React.Component {
   state = {
    windowWidth : window.innerWidth
   }

   watchWidth=()=>{
    this.setState({
        windowWidth:window.innerWidth
    })
   }
   
   componentDidMount(){
    console.log("Mount")
    window.addEventListener("resize",this.watchWidth)
   }
    
    
   componentWillUnmount(){
    console.log("unmount")
    window.removeEventListener("resize",this.watchWidth)
   }
   render() {
    return (
        <h1>Window width: {this.state.windowWidth}</h1>
    )
}
}







    // const [windowWidth,setWindowWidth]=React.useState(window.innerWidth)



  // useEffect(()=>{
    //     console.log("Running useEffect")
    //     function setWindow(){
    //         console.log("Running setWindow")
    //         setWindowWidth(window.innerWidth)
    //     }
    //     window.addEventListener("resize",setWindow)

    //     return function(){
    //         console.log("Running cleanup")
    //         window.removeEventListener("resize",setWindow)
    //     }
    // },[])