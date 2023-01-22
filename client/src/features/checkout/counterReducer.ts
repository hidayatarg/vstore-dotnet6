
//  main infrs
export interface CounterState {
    data: number;
    title: string;
}

const initalState: CounterState = {
    data: 42,
    title: 'yet another redux counter'
}


// actions
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

// action creators
export function increment(amount = 1) {
    return {
        type: INCREMENT_COUNTER,
        payload: amount
    }
}

export function decrement(amount = 1) {
    return {
        type: DECREMENT_COUNTER,
        payload: amount
    }
}


export default function counterReducer(state = initalState, action: any){
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                data: state.data + action.payload
            }
        
        case DECREMENT_COUNTER:
            return {
                ...state,
                data: state.data - action.payload
            }
    
        default:
            return state;
    }
}