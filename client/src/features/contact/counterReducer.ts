export interface CounterState {
    data: number,
    title: string
}

const initalState: CounterState = {
    data: 42,
    title: 'YARC'
}

export default function counterReducer(state = initalState, action: any) {
    return state;
}