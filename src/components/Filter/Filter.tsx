import {FC} from "react";
import s from "./Filter.module.scss";
import {useAppDispatch, useAppSelector} from "../../redux/hook";
import Icon from "../Icon/Icon";
import {setCheckList} from "../../redux/TicketsSclice";


const filterList = ["Всі", "Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"];


const Filter: FC = () => {
    const checkList = useAppSelector(state => state.tickets.checkList);
    const dispatch = useAppDispatch();

    if (checkList.length === 0) {
        dispatch(setCheckList(Array(filterList.length).fill(false)));
    }
    const setCheck = (i: number) => {
        const result = [...checkList];
        result[i] = !result[i];
        dispatch(setCheckList(result));
    }


    return (
        <div className={s.filter}>
            <p className={s.filter__title}>кількість пересадок</p>
            <ul className={s.filter__list}>
                {filterList.map((filter, i) => (
                    <li key={filter} className={s.filter__item}>
                        <label className={s.filter__label}>
                            <input className={s.filter__checkbox} checked={checkList[i]} type="checkbox"
                                   onChange={() => setCheck(i)}/>
                            <Icon cn={s.filter__icon} icon="check" w={12} h={8}/>
                        </label>
                        {filter}
                    </li>
                ))}
            </ul>
        </div>)
}
export default Filter;