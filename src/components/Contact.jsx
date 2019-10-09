import React from 'react';
import './Style.css';



function Contact (props){
    return (
        <div className="Contact"> 
        
            <img className ='avatar' src={props.avatar}></img>
            <div className = "info">
                <h3 className= 'name'>{props.name}</h3>
                <div className = "status">
                    <span className= {props.online? "status-online" : "status-offline"}></span>
                    <p>{props.online? "On line" : "Off line"}</p>
                </div>
            </div>
       
       
        </div>
    );
}





export default Contact;