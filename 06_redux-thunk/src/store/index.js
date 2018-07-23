import { reducer1, reducer2 } from './reducers';
import { createStore, combineReducers, applyMiddleware } from '../redux';

// 注意传入对象的 key 决定了最终状态的属性名
let reducers = combineReducers({ 
    counter1Data: reducer1,
    counter2Data: reducer2
});

// 实现点击按钮时，打印新、旧值的中间件
function logger(store) {
    return function (next) { // store.dispatch
        return function (action) {
            console.log(`old age:`, store.getState().counter1Data.age);
            next(action);
            console.log(`new age:`, store.getState().counter1Data.age);
        }
    }
}

function thunk({dispatch, getState}) {
    return function(next) {
        return function(action) {
            if(typeof action === 'function') {
                // 如果发过来的action是一个函数，则让他执行
                action(dispatch, getState);
            } else {
                // 如果不是一个函数，那么直接传给老的store.dispatch
                next(action);
            }
        }
    }
}

// 只能处理成功，失败则处理不了
function promise({dispatch, getState}) {
    return function(next) {
        return function(action) {
            if(typeof action.then && typeof action.then === 'function') {
                // 如果是 Promise
                /* action.then((newAction) => {
                    dispatch(newAction);
                }); */
                action.then(dispatch);
            } else if(action.num && action.num.then && typeof action.num.then === 'function') {
                action.num.then(num => {
                    dispatch({
                        ...action,
                        num
                    });
                }, num => {
                    dispatch({
                        ...action,
                        num
                    });
                })
            } else {
                // 如果不是一个函数，那么直接传给老的 store.dispatch
                next(action);
            }
        }
    }
}


// 应用中间件，应用中间件的过程，其实就是改变 dispatch
let store = applyMiddleware(promise)(createStore)(reducers);
export default store;