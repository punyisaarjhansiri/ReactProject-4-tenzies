import React from "react";

export default function Die(props){
    const data = [
       "https://cdn-icons-png.flaticon.com/128/7011/7011133.png",
       "https://cdn-icons-png.flaticon.com/128/7011/7011138.png",
       "https://cdn-icons-png.flaticon.com/128/7011/7011144.png",
       "https://cdn-icons-png.flaticon.com/128/7011/7011150.png",
       "https://cdn-icons-png.flaticon.com/128/7011/7011155.png",
       "https://cdn-icons-png.flaticon.com/128/7011/7011160.png"
    ]
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
    } 

    return(
    <div className="die-face" style={styles}>
        <img  className="die-num" onClick={props.holdDice} src = {data[props.value-1]} />
    </div>
    )
}