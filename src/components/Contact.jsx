import React from 'react';
import './Style.css';



class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            online : props.online,
        }
    }
    render(){
        return (
            <div className="Contact"> 
            
                <img className ='avatar' src={this.props.avatar}></img>
                <div className = "info">
                    <h3 className= 'name'>{this.props.name}</h3>
                    <div className = "status">
                        <span className= {this.state.online? "status-online" : "status-offline"}
                        onClick= {event =>{
                            const newOnline =! this.state.online;
                            this.setState({online: newOnline});
                        }}><p>{this.state.online? "Online" : "Offline"}</p>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}





export default Contact;