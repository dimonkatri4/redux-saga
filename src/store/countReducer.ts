const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialState = {
    count: 0
}



export const countReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1}
        case DECREMENT:
            return {...state, count: state.count - 1}
    }
    return state
}

type ActionType = IncrementType | DecrementType;

interface IncrementType {
    type: typeof INCREMENT
}

interface DecrementType {
    type: typeof DECREMENT
}

export const incrementCreator = () => ({type: INCREMENT});
export const decrementCreator = () => ({type: DECREMENT});