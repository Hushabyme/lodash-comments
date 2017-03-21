import isPrototype from './isPrototype.js'

/**
 * 初始化对象克隆
 *
 * @private
 * @param {Object} object 要克隆的对象
 * @returns {Object} 返回初始的克隆
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? Object.create(Object.getPrototypeOf(object))
    : {}
}

export default initCloneObject;

/**
*
* Test
*
* */

// Object.create(Object.getPrototypeOf(object)) 这时一个很典型的用法，一定要记住！
// 当你要指定对象原型创建一个新的对象的时候，十分有用！
