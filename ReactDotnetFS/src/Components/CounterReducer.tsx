

export type CounterState = {
    data: number;
}

const initialstate: CounterState = {
    data: 99
}

export default function CounterReducer(state = initialstate, action: { type: string }) {
    switch (action.type) {
        case 'increment':

            return {
                ...state,
                data: state.data + 1
            }
        case 'decrement':
            return {
                ...state,
                data: state.data - 1
            }

        default:
            return state;

    }





}