import {FC} from "react";
import {IButton} from "types";
import s from "./Button.module.scss";
const Button:FC<IButton> = ({text, cn, click, disabled})=> {
    return <button
        disabled={disabled}
        className={`${s.btn} ${cn} ${disabled ? s.disabledBtn : ''}`}
        onClick={click}
        type="button"
    >
        {disabled ? "а це все" : text}
    </button>
}
export default Button;