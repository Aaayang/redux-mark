import { ADD2, MINUS2 } from '../../actions/action-types';

let initState = {
    name: 'sherry',
    age: 0
};

export default function (state = initState, action) {
    switch (action.type) {
        case ADD2:
            return {
                ...state,
                age: state.age + action.num
            };

        case MINUS2:
            return {
                ...state,
                age: state.age - action.num
            };
        default:
            return state;
    }
}