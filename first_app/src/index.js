import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import Clock from './Clock';
import Toggle from './HandlingEvents';
import LoggingButton from './HandlingEvents';
import Arguments from './HandlingEvents';
import * as serviceWorker from './serviceWorker';

// ex 1
const element = <h1>Hello, world!</h1>;

// ex 2
var name = 'Van Sang';
const element2 = <h1>Hello, {name}!</h1>

// ex 3
function formatName(urs){
    return urs.firstName + ' ' + urs.lastName;
}
const user = {
    firstName: 'Sang',
    lastName: 'Le'
}
const element3 = <h1>{formatName(user)}</h1>;

// ex 4
const user2 ={
    firstName: 'Than',
    lastName: 'Huynh'
}
function getGreeting(urs){
    if(urs){
        return <h1>Hello, {formatName(urs)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>
}

// ex 5
const element5 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, ex 5!'
);

// ex 6
const element6 = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, ex 6!'
    }
};

// ex 7
function tick(){
    const element7 = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element7, document.getElementById('root'));
}
//setInterval(tick,1000);

// Components and Props
// ex 8
function Welcome(props){
    return <h1>Hello, {props.name}!</h1>;
}
const element8 = <Welcome name='Sang'/>;

// ex 9
function App(){
    return (
        <div>
            <Welcome name='Anh'/>
            <Welcome name='Than'/>
            <Welcome name='Thach'/>
        </div>
    );
}
var element9 = <App/>;

// ex 10
function Comment(props){
    return (
        <div className='Comment'>
            <div className='UserInfo'>
                <img className='Avatar'
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className='UserInfo-name'>
                    {props.author.name}
                </div>
            </div>
            <div className='Comment-text'>
                {props.text}
            </div>
            <div className='Comment-date'>
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function formatDate(date){
    return date.toLocaleDateString();
}

const cmt = {
    d: new Date(),
    t: 'I hope you enjoy learning React!',
    a:{
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64'
    }
};

var element10 = <Comment
                    date={cmt.d}
                    text={cmt.t}
                    author={cmt.a}
                />;

// ex 11
function Avatar(props){
    return(
        <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
        />
    );
}

function UserInfo(props){
    return(
        <div className='UserInfo'>
            <Avatar author={props.author}/>
            <div className='UserInfo-name'>
                {props.author.name}
            </div>
        </div>

    );
}

const cmt2 = {
    d: new Date(),
    t: 'He hopes you enjoy learning React!',
    a:{
        name: 'Hello Kitty 2',
        avatarUrl: 'https://placekitten.com/g/64/64'
    }
};

function Comment2(props){
    return(
        <div className='Comment'>
            <UserInfo author ={props.author}/>
            <div className='Comment-text'>
                {props.text}
            </div>
            <div className='Comment-date'>
                {formatDate(props.date)}
            </div>
        </div>
    )
}
var element11 = <Comment2 date={cmt2.d} text={cmt2.t} author={cmt2.a}/>

// ex 12
// function Clock(props){
//     return(
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }

// EX 13
// function Tick(){
//     ReactDOM.render(
//         <Clock date={new Date()}/>,
//         document.getElementById('root')
//     )
// }

// setInterval(tick,1000);

//ex 13
var element14 = <Clock/>

// ReactDOM.render(
//     //<h1>Hello, world!</h1>,
//     //element,
//     //element2,
//     //element3,
//     //getGreeting(user2),
//     //element5,
//     //element6, // doesn't work
//     //element8,
//     //element9,
//     //element10,
//     element14,
//     document.getElementById('root')
// );

// Handling events
// Toggle
var toggle = <Toggle/>

// LoggingButton
var loggingButton = <LoggingButton/>

var argument = <Arguments/>

ReactDOM.render(
    //toggle,
    //loggingButton,
    argument,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
