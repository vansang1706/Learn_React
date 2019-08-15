import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
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

ReactDOM.render(
    //<h1>Hello, world!</h1>,
    //element,
    //element2,
    //element3,
    //getGreeting(user2),
    element5,
    //element6, // doesn't work
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
