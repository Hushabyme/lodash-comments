import isObject from '../isObject.js'
import isPrototype from './isPrototype.js'
import nativeKeysIn from './nativeKeysIn.js'

/** 用于检测属性是否为该对象自身所有（不是继承而来） */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 *  `keysIn` 方法的基本实现，但他不会将稀疏数组看成密集数组
 *
 * @private
 * @param {Object} object 要查询的对象
 * @returns {Array} 返回由属性名组成的数组
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object)
  }
  const isProto = isPrototype(object);
  const result = [];

  for (const key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

export default baseKeysIn;
