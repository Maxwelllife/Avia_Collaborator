import {FC} from "react";
import icons from "assets/icons.svg";
import {IIcon} from "types";

const Icon:FC<IIcon> = ({icon, cn, w, h=w}) => {
    return (
        <svg className={cn} width={w} height={h}>
            <use href={`${icons}#${icon}`}/>
        </svg>
    )
}

export default Icon;