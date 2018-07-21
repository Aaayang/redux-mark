export default function (reducer) {
    let state;
    let listeners = [];

    function getState() {
        return JSON.parse(JSON.stringify(state));
    }
    function dispatch(action) {
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