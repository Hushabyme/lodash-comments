import isKey from './isKey.js'
import stringToPath from './stringToPath.js'
import toString from '../toString.js'

/**
 * 如果不是一个路径数组，则将 `value` 转换为路径数组
 *
 * @private
 * @param {*} value 要检查的值
 * @param {Object} [object] 查询键对象
 * @returns {Array} 返回 cast 属性路径数组
 */
function castPath(value, object) {
  if (Array.isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

export default castPath;
