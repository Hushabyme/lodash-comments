import assignValue from './assignValue.js'
import castPath from './castPath.js'
import isIndex from './isIndex.js'
import isObject from '../isObject.js'
import toKey from './toKey.js'

/**
 * `set` 方法的基础实现
 *
 * @private
 * @param {Object} object 要修改的对象
 * @param {Array|string} path 要设置的属性的路径
 * @param {*} value 要设置的值
 * @param {Function} [customizer] 定义路径创建的功能
 * @returns {Object} 返回 `object`
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object
  }
  path = castPath(path, object);

  const length = path.length
  const lastIndex = length - 1;

  let index = -1;
  let nested = object;

  while (nested != null && ++index < length) {
    const key = toKey(path[index]);
    let newValue = value;

    if (index != lastIndex) {
      const objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {})
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key]
  }
  return object;
}

export default baseSet;
