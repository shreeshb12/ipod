import React from 'react';
import Image from '../images/preview.png'
const Screen=(props)=>{
    const {menu,submenu,select}=props;
    return(
        <div className="screen-container" id="screen-container" style={styles.imageContainer}>
        <a href="https://github.com/shreeshb12" target="_blank" rel="noreferrer">
            <img id="git" src="https://avatars.githubusercontent.com/u/102280454?v=4" alt="gitImage"  />
        </a>
      {/* if menu = true the show menu */}
        <div className="menu" id="menu">
          <span className="heading">Menu</span>
          <ul className="menu-list" id="menu-list">
            <li id="song" className={select==='song'?'select':''} >Music</li>
            <li id="games" className={select==='games'?'select':''} >Games</li>
            <li id="setting" className={select==='setting'?'select':''}>Setting</li>
            <li id="developer" className={select==='developer'?'select':''} >Developer</li>
          </ul>
       </div>

      {
        !menu && submenu ?
        <div className="menu">
          <span className="heading">Music</span>
          <ul className="menu-list" id="menu-list">
            <li id="allsong" className = "" >All Song</li>
            <li id="album" className = "" >Album</li>
            <li id="artist" className = "" >Artist</li>
          </ul>
        </div>
        :null
      }
        </div>
    )
}

const styles={
    imageContainer: {backgroundImage : `url(${Image})`}
    }
export default Screen;