/* function add1(str) {
    return 1 + str;
}
function add2(str) {
    return 2 + str;
}
function add3(str) {
    return 3 + str;
}
let ret = add1(add2(add3('xxx')));

console.log(ret);// 123xxx */


/* function add1(str) {
    return 1 + str;
}
function add2(str) {
    return 2 + str;
}
function add3(str) {
    return 3 + str;
}

function compose(...fns) {// [add1,add2,add3]
    return function(args) {
        return fns.reduceRight((val, fn) => fn(val), args);
    }
}
let res = compose(add1, add2, add3)('xxx');
console.log(res); */



/* function add1(str) {
    return 1 + str;
}
function add2(str) {
    return 2 + str;
}
function sum(a, b) {
    return a + b;
}
function compose(...fns) {// [add1,add2,add3]
    return function (...args) {
        // 取出最后一个函数 sum
        let last = fns.pop();
        return fns.reduceRight((val, fn) => fn(val), last(...args));
    }
}
let res = compose(add1, add2, sum)('xxx', 'yyy');
console.log(res); */



/* function add1(str) {
    return 1 + str;
}
function add2(str) {
    return 2 + str;
}
function sum(a, b) {
    return a + b;
}
function compose(...fns) {// [add1,add2,add3]
    return fns.reduce((a, b) => (...args) => a(b(...args)) );
}

let res = compose(add1, add2, sum)('xxx', 'yyy');
console.log(res); */

export default function(...fns) {
	return fns.reduce((a,b)=>(...args)=>a(b(...args)));
}
