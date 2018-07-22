import reducer from './reducer';
import { createStore} from '../redux';
// 创建 store
let store = createStore(reducer);
export default store;