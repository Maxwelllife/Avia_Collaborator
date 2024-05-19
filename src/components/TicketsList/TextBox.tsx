import {FC} from "react";
import {ITextBox} from "types";
import s from "./TicketsList.module.scss";


const TextBox: FC<ITextBox> = ({title, text}) => {
    return (
        <div>
            <p className={s.a}>{title}</p>
            <p>{text}</p>
        </div>
    );
}
export default TextBox;