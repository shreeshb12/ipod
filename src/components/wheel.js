import React from "react";


const Wheel = (props) =>{
    return (
      <div className="container">
        <div className="outer-circle" id="outer-circle" onClick={props.onHandleRotate}>
          <span id="menu-btn" className="menu-btn" onClick={props.onMenuClick} >Menu</span>
          <img id="play-pause-btn" className="play-pause-btn" src={require('../images/play-pause.png')} alt="play-pause-btn" onClick={props.playPause}/>
          <img id="prev-btn" className="prev-btn" src={require('../images/prev.png')} alt="prev-btn"/>
          <img id="next-btn" className="next-btn" src={require('../images/next.png')} alt="next-btn"/>
          <div id="inner-circle" className="inner-circle" onClick={props.handleInnerCircleClick} data-id={props.dataId}></div>
        </div>
      </div>
    );
  }

  export default Wheel