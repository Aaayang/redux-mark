import { ADD, MINUS } from './action-types';

export function add(e, num=1) {
    return {
        type: ADD,
        num
    };
}
export function minus(e, num=1) {
    return {
        type: MINUS,
        num
    };
}

// 不能
// export {
//     add,
//     minus
// }