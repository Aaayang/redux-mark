import { ADD1, MINUS1, ADD2, MINUS2 } from './action-types';

export function add1(e, num=1) {
    return {
        type: ADD1,
        num
    };
}
export function minus1(e, num=1) {
    return {
        type: MINUS1,
        num
    };
}

export function add2(e, num = 1) {
    return {
        type: ADD2,
        num
    };
}
export function minus2(e, num = 1) {
    return {
        type: MINUS2,
        num
    };
}
// 不能
// export {
//     add,
//     minus
// }