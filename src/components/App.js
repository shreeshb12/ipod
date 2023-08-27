import React from 'react';
import Wheel from './wheel';
import Screen from './screen';
import ZingTouch from 'zingtouch';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      menu : false,
      menu_options : ['song','games','setting','developer'],
      submenu : false,
      submenu_options:['allsong','album','artist'],
      selected_item : 0,
      angle : 0
    }
  }

  componentDidMount(){
    console.log('outer circle rotate')
    const target=document.getElementById('outer-circle')
    const zt=new ZingTouch.Region(target);
      zt.bind(target,'rotate',(e)=>{
        if(this.state.menu)
        {
          let {menu_options,selected_item}=this.state;
          let dist=e.detail.distanceFromLast;
          let angle=this.state.angle+dist;
          this.setState({
            angle
          })

          if(angle>60)
          {
            selected_item+=1;
            if(selected_item===menu_options.length)
            {
                selected_item=0
            }
            this.setState({
              selected_item:selected_item,
              angle:0
            });
          }

          if(angle<-60)
          {
            selected_item-=1;
            if(selected_item<0)
            {
                selected_item=3
            }
            this.setState({
              selected_item:selected_item,
              angle:0
            });
          }
        }
      })
  }

  onMenuClick=(props)=>{
    console.log('menu clicked');
    const {menu}=this.state;
    this.setState({
      menu:!menu,
      angle:0,
      selected_item:0
    })
    const displayMenu=document.getElementById('menu');
    displayMenu.classList.toggle('display');
  }

  handleInnerCircleClick=()=>{
    console.log("Display"+this.state.menu_options[this.state.selected_item]);
  }
  render(){
    const{menu_options,menu,submenu,selected_item}=this.state;
    return(
      <div className="App">
        <Screen menu={menu} submenu={submenu} select={menu_options[selected_item]}/>
        <Wheel 
        onMenuClick={this.onMenuClick} 
        onHandleRotate={this.onHandleRotate} 
        handleInnerCircleClick={this.handleInnerCircleClick}/>
      </div>
    )
  };
}

export default App;
