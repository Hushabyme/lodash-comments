import isObjectLike from './isObjectLike.js'
import isPlainObject from './isPlainObject.js'

/**
 * 检查 `value` 是否有可能为 DOM 元素
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是 DOM 元素，返回 `true`，否则返回 `false`
 * @example
 *
 * isElement(document.body)
 * // => true
 *
 * isElement('<body>')
 * // => false
 */
function isElement(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value)
}

export default isElement

/*
*
* 思考：
*
* 如果节点是元素(element)节点，则 nodeType 属性将返回 1
* 如果节点是属性(attribute)节点，则 nodeType 属性将返回 2
*
* */
