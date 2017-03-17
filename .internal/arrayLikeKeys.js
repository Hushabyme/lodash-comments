import isArguments from '../isArguments.js'
import isBuffer from '../isBuffer.js'
import isIndex from './isIndex.js'
import isTypedArray from '../isTypedArray.js'

/** 用于检查对象是否是自有属性 */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 创建数组的可枚举属性名称的数组，如 `value`
 *
 * @private
 * @param {*} value 要查询的 value
 * @param {boolean} inherited 指定返回继承的属性名称
 * @returns {Array} 返回属性名数组
 */

function arrayLikeKeys(value, inherited) {
  const isArr = Array.isArray(value);
  const isArg = !isArr && isArguments(value);
  const isBuff = !isArr && !isArg && isBuffer(value);
  const isType = !isArr && !isArg && !isBuff && isTypedArray(value);
  const skipIndexes = isArr || isArg || isBuff || isType;
  const length = value.length;
  const result = new Array(skipIndexes ? length : 0);
  let index = skipIndexes ? -1 : length;
  while (++index < length) {
    result[index] = `${ index }`
  }
  for (const key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           (key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) || // Skip index properties.
           isIndex(key, length));
        ))) {
      result.push(key);
    }
  }
  return result;
}

export default arrayLikeKeys;
