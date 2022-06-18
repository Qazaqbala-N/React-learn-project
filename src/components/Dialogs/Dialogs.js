import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          {props.dataDialog.map(dialog=>(<DialogItem name={dialog.name} id={dialog.id}/>))}
      </div>
      <div className={s.messages}>
        {props.dataMessage.map(x=><Message message={x.message} id={x.id} />)}
      </div>
    </div>
  );
};

export default Dialogs;
