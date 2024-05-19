import {FC} from "react";
import TextBox from "./TextBox";
import {ITicket} from "types";
import logo from "assets/a4e_logo.png"
import s from "./TicketCard.module.scss"

const formatedPrice = (value: number): string => new Intl.NumberFormat("uk").format(value);
const TicketCard:FC<ITicket> = ({ticket}) => {
    const {
        // id,
        price,
        departure,
        arrival,
        durationTo,
        durationFrom,
        scheduleTo,
        scheduleFrom,
        connectionTo,
        connectionFrom
    } = ticket;
    const getFormatTime = (minutes:number):string => {
        const hours = Math.floor(minutes/60);
        const restMinutes = minutes%60;
        return `${hours}г ${restMinutes}хв`;
    }
    const getConnectionCount = (connections:string[]):string => {
        const count = connections.length;
        let ending = "пересадок";

        if (!count) {
            return "без пересадок"
        } else {
            if (count < 10 || count > 20) {
                const lastNumber = count%10;

                if (lastNumber === 1) {
                    ending = "пересадкa"
                } else if (lastNumber > 1 && lastNumber < 5) {
                    ending = "пересадки"
                }
            }
        }
        return `${count} ${ending}`;
    }
    return (<li className={s.card}>
                <div className={s.card__first_row}>
                    <p className={s.card__price}>{formatedPrice(price)} $</p>
                    <img src={logo} width="119" alt="logo company"/>
                </div>
                <div className={s.card__second_row}>
                    <TextBox title={`${departure}-${arrival}`} text={scheduleTo}/>
                    <TextBox title="в дорозі" text={getFormatTime(durationTo)}/>
                    <TextBox title={getConnectionCount(connectionTo)} text={connectionTo.join(", ")}/>
                    <TextBox title={`${arrival}-${departure}`} text={scheduleFrom}/>
                    <TextBox title="в дорозі" text={getFormatTime(durationFrom)}/>
                    <TextBox title={getConnectionCount(connectionFrom)} text={connectionFrom.join(", ")}/>
                </div>
            </li>)
}
export default TicketCard;