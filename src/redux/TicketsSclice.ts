import {createSlice} from "@reduxjs/toolkit";
// import ticketsList from "database/tickets.json"

const initialState = {
    // list: ticketsList.slice(0,5),
    sortBy: "",
    filter: "",
}
const ticketsSlice = createSlice({
    name: "tickets",
    initialState,

    reducers: {
        setSortBy:(state, {payload}) => {
            state.sortBy = payload
        },
    }
})

export const {setSortBy} = ticketsSlice.actions;
export default ticketsSlice.reducer;