/**
 * 检查 `value` 是否是 object-like
 *
 * 一个值被认为是 object-like 则表示它不是 null，并且 typeof 的结果为 object
 *
 * 注意：object-like 仅表示它是一个对象，Array 也属于对象，请与 plain-object 区分开
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是 object-like 则返回 `true`，否则返回 `false`
 *
 */

function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

export default isObjectLike;
