import baseConformsTo from './baseConformsTo.js'
import keys from '../keys.js'

/**
 * `conforms` 方法的基础实现，只不过它不能克隆 `source`
 *
 * @private
 * @param {Object} source 判断属性的对象谓词的相符
 * @returns {Function} 返回新的指定的函数
 */

function baseConforms(source) {
  const props = keys(source);
  return (object) => baseConformsTo(object, source, props);
}

export default baseConforms;
