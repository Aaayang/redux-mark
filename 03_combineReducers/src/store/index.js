import { reducer1, reducer2 } from './reducers';
import { createStore, combineReducers } from '../redux';

// 注意传入对象的 key 决定了最终状态的属性名
let reducers = combineReducers({ 
    counter1Data: reducer1,
    counter2Data: reducer2
});

let store = createStore(reducers);

export default store;