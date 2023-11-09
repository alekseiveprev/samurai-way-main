import React, { RefObject } from "react";
import s from "./Dialogs.module.css";
import DialodItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogsArrayPropsType = {
  id: number
  name: string
};
type MessagesArrayPropsType = {
  id: number
  message: string
};
type DialogsPropsType = {
  dialogs:DialogsArrayPropsType[]
  messages:Array<MessagesArrayPropsType>
};

type DialogsProps = {
  state: DialogsPropsType
}
// 


const Dialogs: React.FC<DialogsProps> = (props) => {
 //1
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
  let dialogsElements = props.state.dialogs.map(d => <DialodItem name={d.name} id={d.id} />)

  let messagesElements = props.state.messages.map((m) => { return <Message message={m.message} /> })
  
  let newMessageElement:RefObject<HTMLTextAreaElement> = React.createRef();
     
  let addMessage = () => {
    let text = newMessageElement.current?.value
    alert(text)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}

      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessageElement}> </textarea>
        </div>
        <div>
          <button onClick={addMessage}> Add Message</button>
          <button> Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
