import React from "react";
// import song from '../../songs/onmyway.mp3';
import backgroundImage from '../../images/musicplayerbackground.jpg';

const MusicPlayer = () => {
        return(
                    <div id="music player">
                        <div id='background'>
                            <img src={backgroundImage} alt="background" className="backgroundImage"/>
                        </div>
                        {/* song poster */}
                        <img src={require('../../images/alanwalker.jpg')} style={styles.songPoster} alt="on my way" className="" id="poster"/>
                        <div style={styles.songDetailsDiv}>
                            {/* song details div */}
                            <h2>On My Way</h2>
                            <div style={styles.songHistory}>
                                Alan Walker<br></br>
                                Sabrina Carpenter<br></br>
                                21 March 2019
                            </div>
                        </div>
                    </div>
        )
}
const styles={
    //  styling the Music Player Component
    songPoster:{
        position:'absolute',
        height:'100px',
        width:'100px',
        borderRadius:'50%',
        top:'25%',
        left:'20px',
        border:'2px solid #ffffff'
    },
    songDetailsDiv:{
        position:'absolute',
        width:'40%',
        display:'inline-block',
        top:'15px',
        right:'15px',
        verticalAlign:'top',
        color:'white',
        fontSize:'1rem',
    },
    songHistory:{
        color:"#62de65",
        fontSize:'0.8rem'
    },
}
export default MusicPlayer;