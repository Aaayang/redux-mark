// actionCreatorObj 是一个创建 action 的函数对象
export default function(actionCreatorObj,dispatch) {
    return Object.keys(actionCreatorObj).reduce((init, key) => {
        // 第一个 ...args 的点击事件传过来的
        // 第二个 ...args 是传递给 actionCreatorObj 的参数，所以 actionCreatorObj 中需要接受下
        init[key] = (...args) => dispatch(actionCreatorObj[key](...args));
        return init;
    }, {});
}