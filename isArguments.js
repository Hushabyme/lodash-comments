// import getTag from './.internal/getTag.js'

/**
 * 检查 `value` 是否可能是一个 `arguments` 对象
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是一个 `arguments` 对象返回 `true`，否则返回 `false`
 *
 */
function isArguments(value) {
  return typeof value == 'object' && value != null && getTag(value) == '[object Arguments]';
}

// export default isArguments;

/**
*
* Test
*
* */

// 我们实现一个函数来学习什么是 arguments 对象

function isArgument(value) {
  console.log(typeof value);
}

isArgument(1); // number
isArgument('a');  // string
isArgument(Symbol('a'));  // symbol

// 但是我们知道，只有基础类型才可以使用这种方法

// 假如我们要想上面一样只需要检查 object 的话，那么就可以用 typeof，否则使用 instanceof

function isArgument1(value) {
  console.log(value instanceof Array);
}

isArgument1([1, 2]);  // true

// 但是这样的检测会不会有些麻烦了？毕竟不能 Array、Object 都写一个函数吧？你说用 switch？这是个好办法！
// 但是 switch 要检查多少呀？如果传入的是一个字符串呢？数字呢？还是很麻烦对吧

// 这里我查了一些资料，发现这是一个好办法

function isArgument2(value) {
  console.log({}.toString.call(value));
}

isArgument2('a');  // [object String]
isArgument2(1);  // [object Number]
isArgument2([1, 2]);  // [object Array]

// 这样，我们的问题就解决了！当我们需要什么类型的时候，只需要查询一下我们要的 toString 类型是什么就可以了

