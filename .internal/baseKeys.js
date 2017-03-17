import isPrototype from './isPrototype.js'
import nativeKeys from './nativeKeys.js'

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * `keys` 方法的基本实现，它不把稀疏数组当做密集数组来对待
 *
 * @private
 * @param {Object} object 要查询的对象
 * @returns {Array} 返回属性值组成的数组
 */

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object)
  }
  const result = [];
  for (const key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

export default baseKeys;


/**
 *
 * Test
 *
 */

// 这里是模拟 Object.keys() 的方法，当我们需要的时候，我们也可以使用这个 Polyfill
// 原因是因为 Object.keys() 这个方法是 ES5 中的，在 ES5 以下的浏览器中是不支持的，所以可以自己构建一个这样的方法

// 地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
