import {FC} from "react";
import {ITextBox} from "types";
import s from "./TicketCard.module.scss";


const TextBox: FC<ITextBox> = ({title, text}) => {
    return (
        <div>
            <p className={s.title}>{title}</p>
            <p className={s.text}>{text}</p>
        </div>
    );
}
export default TextBox;