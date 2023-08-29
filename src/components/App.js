import React from 'react';
import Wheel from './wheel';
import Screen from './screen';
import ZingTouch from 'zingtouch';
import song from '../songs/onmyway.mp3';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      menu : false,
      menu_options : ['song','games','setting','developer'],
      submenu : false,
      submenu_options:['allsongs','album','artist'],
      selected_item : 0,
      angle : 0,
      active_item:"allsongs",
      play:false,
    }
  }

  componentDidMount(){
    const target=document.getElementById('outer-circle')
    const zt=new ZingTouch.Region(target);
      zt.bind(target,'rotate',(e)=>{
        if(this.state.menu || this.state.submenu)
        {
          let {menu_options,selected_item,menu,submenu_options}=this.state;
          let dist=e.detail.distanceFromLast;
          let angle=this.state.angle+dist;
          this.setState({
            angle
          })
         const length=menu?menu_options.length:submenu_options.length;

          if(angle>60)
          {
            selected_item+=1;
            if(selected_item===length)
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
                selected_item=length-1
            }
            this.setState({
              selected_item:selected_item,
              angle:0
            });
          }
        }
      })
  }
  playMusic=(play)=>{
    const {menu,submenu}=this.state;
    let playMusic=document.getElementById('audio');
    const poster=document.getElementById('poster');
    if(!menu && !submenu)
    {
      poster.classList.toggle('rotate');
      if(!play)
      {
        playMusic.play();
        this.setState({
          play:!play}
        )
      }
      else{
        playMusic.pause();
        this.setState({
          play:!play}
        )
      }
    }
  }
  onMenuClick=(props)=>{
    console.log('menu clicked');
    const {menu,submenu}=this.state;
    // const displayMenu=document.getElementById('menu');
    // displayMenu.classList.toggle('display');
    if(submenu)
    {
      this.setState({
        submenu:!submenu,
        angle:0,
        selected_item:0
      })
      return;
    }
      this.setState({
        menu:!menu,
        angle:0,
        selected_item:0
      })
  }

  handleInnerCircleClick=async (props)=>{
    let {clicked_item,menu,submenu,active_item}=this.state;
    clicked_item=props.target.dataset.id
    this.setState({
      clicked_item
    })
    if(menu)
    {
      if(clicked_item==='song')
      {
        console.log("Display Submenu");
        this.setState({
          menu:false,
          submenu:true,
          angle:0,
          selected_item:0
        })
      }
    }
    if(submenu)
    {
        this.setState({
          active_item:clicked_item,
          submenu:false,
        })
    }
    if(active_item==='allsongs')
    {
      this.playMusic(this.state.play);
    }
  }
  render(){
    const{menu_options,menu,submenu,selected_item,submenu_options,active_item,playMusic}=this.state;
    return(
      <div className="App">
        <audio src={song} loop id='audio'>
        </audio>
        <Screen menu={menu} submenu={submenu} select={menu?menu_options[selected_item]:submenu_options[selected_item]} active_item={active_item}/>
        <Wheel 
        onMenuClick={this.onMenuClick} 
        onHandleRotate={this.onHandleRotate} 
        handleInnerCircleClick={this.handleInnerCircleClick}
        dataId={menu?menu_options[selected_item]:submenu_options[selected_item]}
        playMusic={playMusic}/>
      </div>
    )
  };
}

export default App;
