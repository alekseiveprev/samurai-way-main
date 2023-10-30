import React from "react";
import s from "./Dialogs.module.css";

type DialogsPropsType = {};
const Dialogs = (props: any) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog + " " + s.active}>Dimych</div>
        <div className={s.dialog}>Ivan</div>
        <div className={s.dialog}>Alex</div>
        <div className={s.dialog}>Sveta</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
