import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

function App(props:any) {

  /* let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 23 },
  ]
 */
 /*  let dialogs = [
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




  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route  path={"/dialogs"} component={Dialogs} />
          <Route path={"/profile"} component={Profile} />
          <Route path={"/news"} component={News} />
          <Route path={"/music"} component={Music} />
          <Route path={"/settings"} component={Settings} /> */}
          {/*<Dialogs/>*/}
          {/*<Profile/>*/}
          <Route  path={"/dialogs"} render={()=> <Dialogs dialogs={props.dialogs}  messages={props.messages} />} />
          <Route path={"/profile"} render={()=> <Profile posts={props.posts}/>} />
          <Route path={"/news"} render={()=> <News/>} />
          <Route path={"/music"} render={()=> <Music/>} />
          <Route path={"/settings"} render={()=> <Settings/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
