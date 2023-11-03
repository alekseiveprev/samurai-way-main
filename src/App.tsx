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
import  { RootStateType } from "./redux/state";

type AppProps = {
  state: RootStateType
}

function App(props:AppProps) {

  
// const {state} = props
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
          <Route  path={"/dialogs"} render={()=> <Dialogs state={props.state.dialogsPage} 
            />} />
         {/*  <Route  path={"/dialogs"} render={()=> <Dialogs dialogs={state.dialogsPage.dialogs} 
           messages={state.dialogsPage.messages} />} /> */}
          <Route path={"/profile"} render={()=> <Profile state={props.state.profilePage}/>} />
         {/*  <Route path={"/profile"} render={()=> <Profile posts={state.profilePage.posts}/>} /> */}

          <Route path={"/news"} render={()=> <News/>} />
          <Route path={"/music"} render={()=> <Music/>} />
          <Route path={"/settings"} render={()=> <Settings/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
