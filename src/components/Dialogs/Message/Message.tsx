import React from "react";
import s from "./../Dialogs.module.css";



type MessagePropsType = {};


const Message = (props: any) => {
  return <div className={s.message}>{props.message}</div>;
};

export default Message;
