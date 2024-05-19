import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import infoReducer from './info/info-slice';

const rootReducer = combineReducers({
    // info: persistedInfo,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;