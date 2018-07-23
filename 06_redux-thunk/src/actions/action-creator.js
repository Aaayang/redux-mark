import { ADD1, MINUS1, ADD2, MINUS2 } from './action-types';
import { resolve } from 'path';

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

export function addAsync1(e, num = 1) {
    // 这样写返调用后返回值是 undefined
    /* setTimeout(() => {
        return {
            type: 'ADD1',
            num
        }    
    }, 1000); */

    // action 是个函数，函数的type也是undefined
    /* return function() {
        setTimeout(() => {
            return {
                type: 'ADD1',
                num
            }
        }, 1000);
    } */

    // 返回一个函数，并执行它的时候并传进来 dispatch, 要处理下这个逻辑
    return function (dispatch, getState) {
        setTimeout(() => {
            // 一秒钟之后不等返回值，自己 dispatch
            dispatch({
                type: ADD1,
                num
            });
        }, 1000);
    }
}


export function addPromise1(e, num = 1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                type: ADD1,
                num
            });
        }, 1000);
    });
}
// 不能
// export {
//     add,
//     minus
// }