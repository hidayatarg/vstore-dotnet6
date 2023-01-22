import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { counterSlice } from './../../features/checkout/counterSlice';
import  { configureStore } from '@reduxjs/toolkit';

// export function configureStore() {
//     return createStore(counterReducer);
// }
// exportts as store
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
}) 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;