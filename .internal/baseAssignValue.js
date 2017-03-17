/**
 * `assignValue` 和 `assignMergeValue` 的基本实现，只不过没有 value 的检查
 *
 * @private
 * @param {Object} object 要修改的对象
 * @param {string} key key 表示要分配的属性
 * @param {*} value 要分配的值
 */

function baseAssignValue(object, key, value) {
  if (key == '__proto__') {
    Object.defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    })
  } else {
    object[key] = value;
  }
}

export default baseAssignValue;

/*
 *
 * 上面的函数其实很好理解，对于我们来说 object[key] = value; 这就是我们平时的赋值模式
 *
 * 但我好奇的是 key == '__proto__' ，这是个什么意思？
 * 我们知道在最新的，大概是 ES5 之后，__proto__ 这种原型链写法已经被废弃了
 *
 * 功夫不负有心人，我还是找到了：https://github.com/expressjs/express/issues/3103
 *
 * 大概的意思就是说：我们可以使用 {__proto__: null} 创建一个无原型链的对象，但是现在我么要使用 Object.create(null) 方法才是最好的选择
 *
 * 但由于有些人的习惯，所以采用折中的方法，就是对于有 __proto__ 的地方，我们可以使用 Object.defineProperty(object, __proto__, {})
 * 这样就可以避免 __proto__ 指向一个不知道什么对象上去
 *
 * */

console.log({__proto__: null} );  // {}

// test
// 而在我们平时的使用中，可以直接使用这样的函数来代替
function assign(object, key, value) {
  return object[key] = value;
}
const obj = {};
assign(obj, 'a', 1);
assign(obj, 'b', 2);

console.log(obj);  // { a: 1, b: 2 }
