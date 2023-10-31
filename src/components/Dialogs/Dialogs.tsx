import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogsPropsType = {};
type DialodItemPropsType = {};
type MessagePropsType = {};
const DialodItem = (props: any) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};

const Message = (props: any) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props: any) => {
let dialogData =[
  {id:1, name:"Dimych"},
  {id:2, name:"Ivan"},
  {id:3, name:"Alex"},
  {id:4, name:"Sveta"},
  {id:5, name:"Victor"},
  {id:6, name:"Jo"},
]
let messagesData =[
  {id:1, message:"Hi"},
  {id:2, message:"How are you?"},
  {id:3, message:"Yo!"},
  {id:4, message:"Yo-Yo!"},
  {id:5, message:"Yo-Yo-Yo"}, 
]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {/* <DialodItem name={"Dimych"} id={1} />
        <DialodItem name={"Ivan"} id={2} />      */}
      </div>
      <div className={s.messages}>
        {/* <Message message={"Hi"} />
        <Message message={"How are you?"} />
        <Message message={"Yo!"} /> */}
      </div>
    </div>
  );
};

export default Dialogs;
