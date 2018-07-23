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

// 应用中间件，应用中间件的过程，其实就是改变 dispatch
let store = applyMiddleware(logger)(createStore)(reducers);
export default store;