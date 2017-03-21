import basePickBy from './basePickBy.js'
import hasIn from '../hasIn.js'

/**
 * `pick` 的基本实现不支持单个属性标识符
 *
 * @private
 * @param {Object} object 源对象
 * @param {string[]} paths 要挑选的属性路径
 * @returns {Object} 返回新的对象
 */
function basePick(object, paths) {
  return basePickBy(object, paths, (value, path) => hasIn(object, path));
}

export default basePick;
