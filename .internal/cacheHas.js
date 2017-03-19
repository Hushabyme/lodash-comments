/**
 * 检查 `cache` 中 `key` 的值是否存在
 *
 * @private
 * @param {Object} cache 要查询的仓库
 * @param {string} key 要检查的实体的 key
 * @returns {boolean} 如果存在 `key`的实体，则返回 `true`，否则返回 `false`
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

export default cacheHas;

// 看到这里可能你会奇怪，这个 has 方法是哪里来的？
// 其实，has 这个方法是存在的，但是这里会报错

// 它是 Reflect.has() 方法，地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has

// 它与 in 操作符是相同的，也就是 key in object

// 那么我们就来动手实现一下，看看它与 in 操作符究竟是不是一样的

/*
function has(obj, key) {
  return obj.has(key);  // obj.has is not a function
}
*/

// 接着我们使用另一个方法试一试

function has(obj, key) {
  return Reflect.has(obj, key);
}

// test1
const obj = {
  a: 1,
  b: 2
};

console.log(has(obj, 'b'));  // true
console.log(has(obj, 'c'));  // false

// 另外，我们用一下 in 操作符

function hasIt(obj, key) {
  return key in obj;
}

// test2
const obj1 = {
  a: 1,
  b: 2
};

console.log(hasIt(obj1, 'a'));  // true
console.log(hasIt(obj1, 'c'));  // false

// 答案是一样的，其次，我们还可以再试一试 key 是继承的属性，而不是 obj 中的属性的情况

const obj2 = Object.create(obj, {
  c: {
    value: 3,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

console.log(obj2);  // {c: 3}
console.log(has(obj2, 'a'));  // true
console.log(hasIt(obj2, 'a'));  // true

// 这里我们可以看到， obj2 中是没有 'a' 这个属性的，但是它继承了 obj 的原型，所以在原型链上还是存在 'a' 的

// 总结：因此，这个方法并不见得是很靠谱的，所以我们如果想要过滤原型链上的属性，我们避免直接使用 in 和 has() 方法
// 在使用前应该加上 Object.hasOwnProperty() 方法作为先验条件
