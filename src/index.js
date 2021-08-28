import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


let nameData = [
    {id: 1, name: 'Kirill'},
    {id: 2, name: 'Svetlana'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Artem'},
    {id: 5, name: 'Alexey'}
]

let MessageData = [
    {message: 'Hello'},
    {message: 'How are you?'},
    {message: 'Goodbye'}
]


let messageData = [
    {message: 'Hello'},
    {message: 'How are you?'},
    {message: 'Sorry'}
]


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App messageData={messageData} MessageData={MessageData} nameData={nameData}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
