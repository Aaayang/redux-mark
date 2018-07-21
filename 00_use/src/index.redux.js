const ADD = 'add';
const REMOVE = 'remove';

// reducer
export function counter(state = 0, action) {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'remove':
            return state - 1;
        default:
            return 0;
    }
}
// action creator
export function add() {
    return {
        type: ADD
    }
}

export function remove() {
    return {
        type: REMOVE
    }
}
export function addAsync() {
    // thunk插件的使用，这里可以返回函数
    return dispatch => {
        setTimeout(() => {
            // 异步结束后，手动执行dispatch
            dispatch(add());
        }, 2000);
    }
}