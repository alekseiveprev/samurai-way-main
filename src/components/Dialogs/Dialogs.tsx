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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialodItem name={"Dimych"} id={1} />
        <DialodItem name={"Ivan"} id={2} />
        <DialodItem name={"Alex"} id={3} />
        <DialodItem name={"Sveta"} id={4} />
        <DialodItem name={"Victor"} id={5} />

        {/* <div className={s.dialog + " " + s.active}>
          <NavLink to={"/dialogs/1"}> Dimych </NavLink>
        </div> */}
      </div>
      <div className={s.messages}>
        <Message message={"Hi"} />
        <Message message={"How are you?"} />
        <Message message={"Yo!"} />
      </div>
    </div>
  );
};

export default Dialogs;
