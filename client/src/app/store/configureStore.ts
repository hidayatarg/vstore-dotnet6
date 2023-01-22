import { createStore } from 'redux';
import counterReducer from '../../features/checkout/counterReducer';

export function configureStore() {
    return createStore(counterReducer);
}