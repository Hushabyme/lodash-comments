/**
 * 该函数是 Object.keys() 方法的简单包装，以确保非对象的值在使用前被强制转换成对象。
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 *
 * @private
 * @param {Object} object 要查询的对象
 * @returns {Array} 返回属性名组成的数组
 */

function nativeKeys(object) {
  return Object.keys(Object(object));
}

export default nativeKeys;

/**
 *
 * Test
 *
 */

// 关于强制转换成对象，也就是 Object()
// 我们平时使用的都是字面量创建对象，而这里是使用构造函数创建对象
// 使用这种方式创建对象，Object() 与 new Object() 没有什么区别

// 这很难理解，Object()，假如我传入一个 Object(1)，你觉得结果会是什么？
// 可以在浏览器中打开看一下，它会将 Number 使用 Object 的形式来表示
// 也就是：Number {[[PrimitiveValue]]: 1}，此外，它的内部还包含了 Number 的所有静态方法和 prototype 方法

// 这里我们不仅要思考一个问题，那就是"在 JavaScript 中一切都是对象"这句话的真正含义
// 我简单的来写一个对象

/*
const Number = {
  __proto__: Object,
  isNaN(num) {
    return isNaN(num);
  }
};

Number.isNaN('a');
*/

// 你有没有发觉，我上面写的就像是我们平时所用的那个 prototype 方法？我这里写在了对象中，你可能觉得不像，那么，如果放在构造函数中呢？

/*
class number {
  constructor(num) {
    this.num = num;
  }

  static MAX_SAFE_INTEGER() {
    return Number.MAX_SAFE_INTEGER;
  }

  isNaN() {
    return Number.isNaN(this.num);
  }
}

const num = new number(2);

console.log(num);  // 2
console.log(number.MAX_SAFE_INTEGER());  // 9007199254740991
console.log(num.isNaN());  // false
*/

// 如果你看到了这里大呼过瘾，那么你应该是懂了什么叫做 "一切都是对象" 了

// 总结：其实我们平时所创建的字面量方法，比如 'a' 就是 String 的一个示例
// 但还是有一些区别的，const a = 'a' 创建的是 String，而 new String('a') 创建的是 Object
