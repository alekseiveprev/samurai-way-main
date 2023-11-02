import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/state";

/* let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 23 },
]

let dialogs = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Ivan" },
  { id: 3, name: "Alex" },
  { id: 4, name: "Sveta" },
  { id: 5, name: "Victor" },
  { id: 6, name: "Jo" },
]

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Yo!" },
  { id: 4, message: "Yo-Yo!" },
  { id: 5, message: "Yo-Yo-Yo" },
] */


ReactDOM.render(
    <App   />,
  document.getElementById('root')
);



/* ReactDOM.render(
  <App posts={posts}   dialogs={dialogs}  messages={messages}   />,
document.getElementById('root')
); */