import React from 'react';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isTonggleOn: true,
            who: "me"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.state.who==="me"){
            this.setState({who: "you"});
        }
        else if(this.state.who==="you"){
            this.setState({who:"me"});
        }
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.who}
            </button>

        );
    }
}
//export default Toggle;

class LoggingButton extends React.Component{
    handleClick = ()=>{
        console.log('this is: ', this)
    }

    render(){
        return(
            <button onClick={this.handleClick}>Click me</button>
        );
    }
}
//export default LoggingButton;

//Passing Arguments to Event Handlers
class Arguments extends React.Component{

    handleClick(str){
        alert(str);
    }

    render(){
        return(
            <button onClick={this.handleClick.bind(this,"Notification")}>Click me</button>
        );
    }

}
export default Arguments;