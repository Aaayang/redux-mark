// 参数：要应用的中间件
export default function applyMiddleware(middleware) {
    // 参数：createStore
    return function (createStore) {
        // 参数：合并后的 reducers
        return function (reducers) {
            let store = createStore(reducers);

            // 执行中间件，返回的是一个函数，注意是这里才开始执行的中间件
            // let next = middleware(store);
            // 执行 next，接受一个 next 并返回 dispatch
            // let dispatch = next(store.dispatch);

            // 保证这个 dispatch 永远是新的 dispatch
            let dispatch;
            let next = middleware({
                getState: store.getState,
                dispatch: action => dispatch(action)
            });

            // 执行 next，接受一个 next 并返回 dispatch
            dispatch = next(store.dispatch);

            return {
                ...store,
                dispatch
            };
        }
    }
}