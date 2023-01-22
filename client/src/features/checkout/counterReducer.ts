
//  main infrs
export interface CounterState {
    data: number;
    title: string;
}

const initalState: CounterState = {
    data: 42,
    title: 'yet another redux counter'
}

export default function counterReducer(state = initalState, action: any){
    return state;
}