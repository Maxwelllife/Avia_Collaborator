import {FC} from "react";
import ticketsList from "database/tickets.json"
import logo from "assets/a4e_logo.png"
import TextBox from "./TextBox";

const TicketsList:FC = () => {
    console.log('lastNumber');
    const getFormatTime = (minutes:number):string => {
        const hours = Math.floor(minutes/60);
        const restMinutes = minutes%60;
        return `${hours}г ${restMinutes}хв`;
    }
    const getConnectionCount = (connections:string[]):string => {
        const count = connections.length;
        console.log('count', count)
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
                console.log('lastNumber',lastNumber);
                console.log('ending',ending);
            }
        }
        return `${count} ${ending}`;
    }
    return <div>
        <ul>
            {ticketsList.map(({id,
                                  price,
                                  departure,
                                  arrival,
                                  durationTo,
                                  durationFrom,
                                  scheduleTo,
                                  scheduleFrom,
                                  connectionTo,
                                  connectionFrom,
                              })=>
                <li key={id}>
                    <div>
                        <p>{price} $</p>
                        <img src={logo} alt="logo company"/>
                    </div>
                    <div>
                        <TextBox title={`${departure}-${arrival}`} text={scheduleTo}/>
                        <TextBox title={`${arrival}-${departure}`} text={scheduleFrom}/>
                        <TextBox title="в дорозі" text={getFormatTime(durationTo)}/>
                        <TextBox title="в дорозі" text={getFormatTime(durationFrom)}/>
                        <TextBox title={getConnectionCount(connectionTo)} text={scheduleTo}/>
                        <TextBox title={getConnectionCount(connectionFrom)} text={scheduleTo}/>
                    </div>
                </li>
            )}
        </ul>
    </div>
}
export default TicketsList;