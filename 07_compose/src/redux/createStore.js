export default function createStore(reducer, initState, enchancer) {
    if(enchancer) {
        return enchancer(createStore)(reducer,initState);
    }
    let state;
    let listeners = [];

    function getState() {
        return JSON.parse(JSON.stringify(state));
    }
    function dispatch(action) {
        // 注意！！！
        // 这时候的 reducer 已经不是指 reducer1 or reducer2 了
        // 而是传过来的那个匿名函数，它的返回值是 newState
        // 执行匿名函数，并把 undefined 和 action 传过去，匿名函数返回 newState，并赋值给这里的 state
        state = reducer(state, action);
        
        listeners.forEach(listener => listener());
    }
    function subscribe(listener) {
        listeners.push(listener);
        return function () {
            listeners = listeners.filter(itemListener => itemListener !== listener);
        };
    }
    dispatch({
        type: '@@INIT'
    });
    return {
        getState,
        dispatch,
        subscribe
    };
}