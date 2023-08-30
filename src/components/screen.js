import React from 'react';
import Home from './sub_components/home';
import MusicPlayer from './sub_components/musicPlayer';
import Games from './sub_components/games';
import Settings from './sub_components/settings';
import Developer from './sub_components/developer';

const Screen=(props)=>{
    let {menu,submenu,select,active_item}=props;
    return(
      <div className="screen-container" id="screen-container">
        <Home menu={menu} submenu={submenu} select={select}/>
        {active_item === 'allsongs'?<MusicPlayer/>:""}
        {active_item === 'games'?<Games/>:""}
        {active_item === 'setting'?<Settings/>:""}
        {active_item === 'developer'?<Developer/>:""}
      </div>
    )
}
export default Screen;