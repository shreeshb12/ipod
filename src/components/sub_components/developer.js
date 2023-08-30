import React from "react";

const Developer=()=>{
    return(
        <div id="developer" style={styles.developerStyles}>
            <img src="https://avatars.githubusercontent.com/u/102280454?v=4" alt="developer" style={styles.developerImage} className="animate__animated animate__fadeInLeft "/>
            <h1 style={styles.developerName} className="animate__animated animate__fadeIn animate__delay-1s" >Shreesh Badiger
                <div className="social-icons" style={styles.developerSocialIcons}>
                    <a href="https://github.com/shreeshb12" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" style={styles.github}></i></a>
                    <a href="https://www.linkedin.com/in/shreeshbadiger1227/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/nimma_shreesh/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" style={styles.instagram}></i></a>
                    <a href="https://www.facebook.com/shreesh.badiger/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                </div>
            </h1>
            
        </div>
    )
}

export default Developer

const styles={
    developerStyles:{
        position:'relative',
        height:'90%',
        width:'100%',
        backgroundImage:'linear-gradient(#e66465, #9198e5)',
        paddingTop:'10px'
    },
    developerImage:{
        position:'absolute',
        height:'100px',
        width:'100px',
        borderRadius:'50%',
        marginTop:'10px',
        border:'2px solid black',
        top:'0',
        left:'65px',
        zIndex:'999'
    },
    developerName:{
        position:'absolute',
        flexDirection:'column',
        alignItems:'center',
        bottom:'2px',
        padding:'0px 10px',
        left:'20px',
        borderRadius:'5px',
        fontSize:'1.5rem',
        backgroundColor:'#ffffff',
        boxShadow:'0 2px 2px 2px #000000',
        zIndex:'99'
    },
    developerSocialIcons:{
        display:'flex',
        justifyContent:'space-around'
    },
    github:{
        color:'#171515'
    },
    instagram:{
        background: "linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
        borderRadius:'5px',
        color:'#000000'
    }
}
