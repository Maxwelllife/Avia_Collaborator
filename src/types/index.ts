export interface ITextBox {
    title: string;
    text: string;
}
export interface ITicket {
    key: string,
    ticket: {
        id: string,
        price: number,
        departure: string,
        arrival: string,
        durationTo: number,
        durationFrom: number,
        scheduleTo: string,
        scheduleFrom: string,
        connectionTo: string[],
        connectionFrom: string[]
    }
}
export interface IButton {
    click?: (event:React.MouseEvent<HTMLButtonElement>)=>void,
    cn?: string,
    text?: string,
    disabled?: boolean
}
export interface IIcon {
    icon: string,
    w?: number,
    h?: number,
    cn?: string
}