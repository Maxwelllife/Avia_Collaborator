import {createSlice} from "@reduxjs/toolkit";

const initialState :{sortBy: string, checkList: boolean[]} = {
    sortBy: "",
    checkList: [],
}
const ticketsSlice = createSlice({
    name: "tickets",
    initialState,

    reducers: {
        setSortBy:(state, {payload}) => {
            state.sortBy = payload;
        },
        setCheckList:(state, {payload}) => {
            state.checkList = payload;
        },
    }
})

export const {setSortBy,setCheckList} = ticketsSlice.actions;
export default ticketsSlice.reducer;