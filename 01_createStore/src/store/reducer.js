import { ADD, MINUS } from '../actions';

let initState = {
    name: 'weixian',
    age: 0
};

export default function (state = initState, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                age: state.age + 1
            };

        case MINUS:
            return {
                ...state,
                age: state.age - 1
            };
        default:
            return state;
    }
}