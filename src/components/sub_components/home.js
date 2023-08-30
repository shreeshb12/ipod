import React from 'react';
const Home=(props)=>{
    let {menu,submenu,select}=props;
    return(
        <>{/* fragments wrapper */}
        
        {/* Notification bar */}
        <nav>
            <p>
                <a href="https://github.com/shreeshb12" target="_blank" rel="noreferrer">
                    <img id="git" src="https://avatars.githubusercontent.com/u/102280454?v=4" alt="gitImage"  />
                    <span>Shreesh's ipod</span>
                </a>
            </p>
            <span id="battery"><img src={`${require('../../images/battery.png')}`} alt="battery"/> </span>
        </nav>
      {/* if menu = true the show menu */}
        <div className={menu?"menu display":"menu"} id="menu">
          <span className="heading">Menu</span>
          <ul className="menu-list" id="menu-list">
            <li id="song" className={select==='song'?'select':''} >Music</li>
            <li id="games" className={select==='games'?'select':''} >Games</li>
            <li id="setting" className={select==='setting'?'select':''}>Setting</li>
            <li id="developer" className={select==='developer'?'select':''} >Developer</li>
          </ul>
       </div>
        {/* if submenu is true display submenu */}
        <div className={submenu?"menu display":"menu"}>
          <span className="heading">Music</span>
          <ul className="menu-list" id="menu-list">
            <li id="allsongs" className={select==='allsongs'?'select':''} >All Song</li>
            <li id="album" className={select==='album'?'select':''} >Album</li>
            <li id="artist" className={select==='artist'?'select':''} >Artist</li>
          </ul>
        </div>
      </>
    )
}


export default Home;