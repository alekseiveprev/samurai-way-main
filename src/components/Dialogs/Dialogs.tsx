import React from "react";
import s from "./Dialogs.module.css";
import DialodItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


type DialogsPropsType = {};

const Dialogs = (props: any) => {
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
  ]
  let dialogsElements = dialogs.map(d => <DialodItem name={d.name} id={d.id} />)

  let messagesElements = messages.map((m) =>{ return  <Message message={m.message} /> })
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
       
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
