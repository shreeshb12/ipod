import React from 'react';
import Wheel from './wheel';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      menu : false,
      song : false,
      games : false,
      setting : false,
      developer : false,
      submenu : false,
      allsong : false,
      album : false,
      artist : false
    }

  }

  onHandleRotate=()=>{
  }
  onMenueClick=()=>{

  }
  handleInnerCircleClick=()=>{

  }
  render(){
    console.log(this.state);
    return(
      <div className="App">
        <Wheel />
      </div>
    )
  };
}

export default App;
