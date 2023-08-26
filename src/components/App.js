import React from 'react';
import Wheel from './wheel';
import Screen from './screen';

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
  onMenuClick=(props)=>{
    console.log('menu clicked');
    console.log(props);
    const {menu}=this.state;
    this.setState({
      menu:!menu
    })
      const displayMenu=document.getElementById('menu');
      displayMenu.classList.toggle('display');
      console.log(displayMenu.classList);
  }
  handleInnerCircleClick=()=>{

  }
  render(){
    console.log(this.state);
    return(
      <div className="App">
        <Screen menu={this.state.menu} submenu={this.state.submenu}/>
        <Wheel onMenuClick={this.onMenuClick}/>
      </div>
    )
  };
}

export default App;
