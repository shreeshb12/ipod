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
      active_item:"home",
      play:false,
    }
  }

  componentDidMount(){

    // handle selection of menu and submenu options based on the rotation of outer circle
    const target=document.getElementById('outer-circle')
    // set the zingtouch for outer-circle
    const zt=new ZingTouch.Region(target);
      zt.bind(target,'rotate',(e)=>{
        // rorate only if menu or submenu is on
        if(this.state.menu || this.state.submenu)
        {
          let {menu_options,selected_item,menu,submenu_options}=this.state;
          let dist=e.detail.distanceFromLast;
          let angle=this.state.angle+dist;
          this.setState({
            angle
          })
          // calculate the no. of items based on menu and submenu
         const length=menu?menu_options.length:submenu_options.length;

        //  if clockwise
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
        // if anti-clockwise
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

      // to handle tap events on mobile devices as zingtouch prevents the click events on target 
      // handle menu tap
      const menuTarget=document.getElementById('menu-btn');
      zt.bind(menuTarget,'tap',(e)=>{
        this.onMenuClick(e);
      })

      // handle innercircle tap
      const innerCircleTarget=document.getElementById('inner-circle');
      zt.bind(innerCircleTarget,'tap',(e)=>{
        this.handleInnerCircleClick(e);
      })

      // handle play and pause tap
      const playAndPause=document.getElementById('play-pause-btn')
      zt.bind(playAndPause,'tap',(e)=>{
        this.playMusic();
      })
  }

  // play and pause the music
  playMusic=()=>{
    let {play}=this.state
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

  // Handle Menu Click
  onMenuClick=(props)=>{
    // console.log('menu clicked');
    const {menu,submenu}=this.state;

    // if submenu is on turn it off
    if(submenu)
    {
      this.setState({
        submenu:false,
        angle:0,
        selected_item:0
      })
      return;
    }

    // handle menu state
    this.setState({
      menu:!menu,
      angle:0,
      selected_item:0
    })
  }

  // Handle InnerCircle click
  handleInnerCircleClick=async (props)=>{
    let {clicked_item,menu,submenu,active_item}=this.state;

    props.stopPropagation(onclick);
    // check which item is selected and set the state of clicked_item
    clicked_item=props.target.dataset.id
    this.setState({
      clicked_item
    })

    // handle click events of main menu items
    if(menu)
    {
      // Display the submenu if the clicked item is song
      if(clicked_item==='song')
      {
        // console.log("Display Submenu");
        this.setState({
          menu:false,
          submenu:true,
          angle:0,
          selected_item:0
        })
      }
      // activate the clicked menu item
      this.setState({
        active_item:clicked_item,
        menu:false,
      })
    }

    // handle click events of submenu items
    if(submenu)
    {
        this.setState({
          active_item:clicked_item,
          submenu:false,
        })
    }

    // handle play and pause 
    if(active_item==='allsongs')
    {
      this.playMusic();
    }
  }

  // render App component
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
        playPause={this.playMusic}
        dataId={menu?menu_options[selected_item]:submenu_options[selected_item]}
        playMusic={playMusic}/>
      </div>
    )
  };
}

export default App;
