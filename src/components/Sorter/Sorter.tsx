import {FC, useState, useEffect} from "react";
import {setSortBy} from "../../redux/TicketsSclice";
import s from "./Sorter.module.scss";
import {useAppDispatch} from "../../redux/hook";

const buttonList = ['Найдешевший', 'Найшвидший', 'Оптимальний'];
const Sorter: FC = () => {
    const[activeBtn, setActiveBtn]= useState(buttonList[0]);
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(setSortBy(buttonList[0]));
    }, [dispatch])
    const sortBy = (index:number):void => {
        dispatch(setSortBy(buttonList[index]))
        setActiveBtn(buttonList[index]);
    }


    return (
        <ul className={s.sorter__list}>
            {buttonList.map((textButton, i)=> (
                <li key={textButton}
                    className={activeBtn===textButton? s.activeBtn:s.btn}
                    onClick={()=>sortBy(i)}>
                    {textButton}
                </li>
            ))}
        </ul>
    )
}
export default Sorter;