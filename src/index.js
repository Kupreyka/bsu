import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {AddMessage, AddPost, subscribe, UpdateNewPostText} from "./redux/state";
import store from "./redux/state";

export let Rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={store.AddPost.bind(store)}
                     addMessage={store.AddMessage.bind(store)}
                     UpdateNewPostText={store.UpdateNewPostText.bind(store)}
                     AddNewMessageText={store.AddNewMessageText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
Rerender(store.getState())

    store.subscribe(Rerender)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
