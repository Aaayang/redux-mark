import { ADD1, MINUS1 } from '../../actions/action-types';

let initState = {
    name: 'weixian',
    age: 0
};

export default function (state = initState, action) {
    switch (action.type) {
        case ADD1:
            return {
                ...state,
                age: state.age + action.num
            };

        case MINUS1:
            return {
                ...state,
                age: state.age - action.num
            };
        default:
            return state;
    }
}