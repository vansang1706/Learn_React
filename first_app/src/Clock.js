import React from 'react';

// Ex 13
// class Clock extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }

// Ex 14
// class Clock extends React.Component{
//     constructor(){
//         super();
//         this.state={date: new Date()};
//     }

//     componentDidMount(){
//         this.timerID = setInterval(
//             ()=> this.tick(), 1000
//         );
//     }

//     componentWillMount(){
//         clearInterval(this.timerID);
//     }

//     tick(){
//         this.setState({
//             date: new Date()
//         });
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }
// }

// Ex 15
function FormattedDate(props){
    return <h2>It is {props.date}</h2>;
}


class Clock extends React.Component{
    constructor(){
        super();
        this.state={date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(), 1000
        );
    }

    componentWillMount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date.toLocaleTimeString()}/>
            </div>
        );
    }
}
export default Clock;