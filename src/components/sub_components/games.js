import React from "react";

const Games=(props)=>{

    return(
    <div style={styles.gamesBody}>
                {/* this just contains one gif */}
        <audio src={`${require('../../songs/fightarcade.wav')}`} autoPlay loop></audio>
        <img style={styles.game} alt=" Game GIF " src="https://media2.giphy.com/media/uYe2emzPgDfj2/giphy.webp?cid=ecf05e47fa455dac230de80fff0206077175b008801bc689&rid=giphy.webp"></img>
    </div>)
}

const styles={ 
    // stylings of Games Component 
    gamesBody:{
        width:'100%',
        height:'93%',
        borderRadius:'0px 0px 10px 10px',
    },
    game:{
        height:'100%',
        width:'100%',
        backgroundSize:'contain'
    }
}

export default Games;