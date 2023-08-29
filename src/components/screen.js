import React from 'react';
import Home from './sub_components/home';
import MusicPlayer from './sub_components/musicPlayer';

const Screen=(props)=>{
    let {menu,submenu,select,active_item}=props;
    return(
      <div className="screen-container" id="screen-container">
        <Home menu={menu} submenu={submenu} select={select}/>
        {active_item === 'allsongs'?<MusicPlayer/>:""}
      </div>
    )
}
export default Screen;