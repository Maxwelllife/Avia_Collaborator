import {FC, useEffect, useState, useCallback } from "react";
import {TicketCard, Button, Sorter, Filter} from "components";
import {useAppSelector} from "../../redux/hook";
import ticketsList from "database/tickets.json"
import s from "./TicketsList.module.scss";
import main_logo from "assets/Logo.png";

const TicketsList: FC = () => {
    const [count, setCount] = useState(5);
    const [list, setList] = useState(ticketsList);
    const {sortBy, checkList} = useAppSelector(state => state.tickets);

    const sorted = useCallback(() => {

        const result = [...ticketsList];
        if (sortBy === "Найдешевший") {
            setList(result.sort((a, b) => a.price - b.price))
        } else if (sortBy === "Найшвидший") {
            setList(result.sort((a, b) => a.durationTo + a.durationFrom - b.durationTo - b.durationFrom));
        } else {
            setList(result.sort((a, b) => {
                    if (a.durationTo + a.durationFrom - b.durationTo - b.durationFrom === 0) {
                        if (a.connectionTo.length + a.connectionFrom.length - b.connectionTo.length - b.connectionFrom.length === 0) {
                            return a.price - b.price;
                        }
                        return a.connectionTo.length + a.connectionFrom.length - b.connectionTo.length - b.connectionFrom.length;
                    }
                    return a.durationTo + a.durationFrom - b.durationTo - b.durationFrom;
                })
            )
        }
    }, [sortBy]);

    const filtered = useCallback(() => {
        if (checkList[0] || checkList.every((check) => check===false )) {
            setList(ticketsList);
        } else {
            const ticketsZero = ticketsList.filter(({connectionTo}) => connectionTo.length === 0);
            const ticketsOne = ticketsList.filter(({connectionTo}) => connectionTo.length === 1);
            const ticketsTwo = ticketsList.filter(({connectionTo}) => connectionTo.length === 2);
            const ticketsThree = ticketsList.filter(({connectionTo}) => connectionTo.length === 3);
            const subList = [ticketsZero, ticketsOne, ticketsTwo, ticketsThree];
            const result = [];

            for (let i = 1; i < checkList.length; i++) {
                if (checkList[i]) result.push(...subList[i-1]);
            }

            setList(result);
        }

    }, [checkList]);

    useEffect(() => {
        sorted();
    }, [sorted]);

    useEffect(() => {
        filtered();
    }, [filtered]);

    const showMoreItems = () => {
        setCount(prev => prev + 5);
    }
    const isAllItemsShown = count >= list.length;

    return (
        <div className={s.container}>
            <a href="#">
                <img src={main_logo} width="82" alt="main logo company"/>
            </a>
            <div className={s.container__inner_wrap}>
                <Filter/>
                <div className={s.container__list}>
                    <Sorter/>
                    <ul className={s.card__list}>
                        {list.slice(0, count).map((ticket) => <TicketCard key={ticket.id} ticket={ticket}/>)}
                    </ul>
                    <Button text="Показати ще 5 квитків" click={showMoreItems} disabled={isAllItemsShown}/>
                </div>
            </div>
        </div>)
}
export default TicketsList;