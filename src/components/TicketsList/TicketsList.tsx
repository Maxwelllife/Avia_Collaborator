import {FC, useState } from "react";
import {TicketCard, Button, Sorter, Filter, Icon} from "components";
import {useAppSelector} from "../../redux/hook";
import ticketsList from "database/tickets.json"
import s from "./TicketsList.module.scss";
import {ITick} from "../../types";

const TicketsList: FC = () => {
    const [count, setCount] = useState(5);

    const {sortBy, checkList} = useAppSelector(state => state.tickets);

    const sorted = (array: ITick[] = ticketsList):ITick[] => {

        if (sortBy === "Найдешевший") {
            return array.sort((a, b) => a.price - b.price)
        } else if (sortBy === "Найшвидший") {
            return array.sort((a, b) => a.durationTo + a.durationFrom - b.durationTo - b.durationFrom);
        } else {
            return array.sort((a, b) => {
                    if (a.durationTo + a.durationFrom - b.durationTo - b.durationFrom === 0) {
                        if (a.connectionTo.length + a.connectionFrom.length - b.connectionTo.length - b.connectionFrom.length === 0) {
                            return a.price - b.price;
                        }
                        return a.connectionTo.length + a.connectionFrom.length - b.connectionTo.length - b.connectionFrom.length;
                    }
                    return a.durationTo + a.durationFrom - b.durationTo - b.durationFrom;
                }
            )
        }
    };
    const filtered = ():ITick[] => {
        if (checkList[0] || checkList.every((check) => check===false )) {
          return ticketsList;
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
            return result;
        }
    };

    const list = sorted(filtered());

    const showMoreItems = () => {
        setCount(prev => prev + 5);
    }
    const isAllItemsShown = count >= list.length;

    return (
        <div className={s.container}>
            <a href="#" className={s.logo_link} aria-label="logo company">
                <Icon cn={s.logo_icon} icon="main_logo" w={82}/>
            </a>
            <div className={s.container__inner_wrap}>
                <Filter/>
                <div className={s.container__list}>
                    <Sorter/>
                    <ul className={s.card__list}>
                        {list.slice(0, count).map((ticket) => <TicketCard key={ticket.id} ticket={ticket}/>)}
                    </ul>
                    <Button text={isAllItemsShown? "Показані всі квитки" : "Показати ще 5 квитків"} click={showMoreItems} disabled={isAllItemsShown} />
                </div>
            </div>
        </div>)
}
export default TicketsList;