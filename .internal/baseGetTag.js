import getRawTag from './getRawTag.js'
import objectToString from './objectToString.js'

/** `Object#toString` 结果引用 */
const nullTag = '[object Null]';
const undefinedTag = '[object Undefined]';

/** 内置值的引用 */
const symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * `getTag` 的基本实现，但没有回退的 buggy 环境
 *
 * @private
 * @param {*} value 要查询的值
 * @returns {string} 返回 `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

export default baseGetTag;
