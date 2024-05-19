import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ticketsSlice from "./TicketsSclice";

const rootReducer = combineReducers({
    tickets: ticketsSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;