import { ADD, MINUS } from './action-types';

export function add() {
    return {
        type: ADD
    };
}
export function minus() {
    return {
        type: MINUS
    };
}

// 不能
// export {
//     add,
//     minus
// }