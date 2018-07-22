import { ADD, MINUS } from '../actions/action-types';

let initState = {
    name: 'weixian',
    age: 0
};

export default function (state = initState, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                age: state.age + action.num
            };

        case MINUS:
            return {
                ...state,
                age: state.age - action.num
            };
        default:
            return state;
    }
}