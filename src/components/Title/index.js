import React from "react";
import "./style.css";

function Title(props) {
  
  
  return (
    <div className="row" style={rowStyle}> 
      <div className="col-md-4">
        <h1>{props.title}</h1>
      </div>
      <div className="col-md-4">
        <h3 className="inst">{props.instruction}</h3>
      </div>
      <div className="col-md-4">
        <h3>Score: {props.points} | High Score: {props.highScore}</h3>
      </div>
    </div>
  )
}

const rowStyle = {
  width: '100%',
  background: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  top: '0',
  zIndex:'100',

}

export default Title;
