import React from "react";

const Settings=()=>{
    return(
        <div style={styles.settingsBackground}>
            <i className="fas fa-cog"></i>
        </div>
    )
}

const styles={
    settingsBackground:{
        fontSize:'50px',
        width:'100%',
        height:'90%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'0px',
        backgroundColor:"#1a1c1e",
        color:'#ffffff'
    }
}
export default Settings;