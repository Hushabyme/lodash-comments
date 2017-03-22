/**
 * 检查`value`以确定是否应在其位置返回默认值
 * 如果 `value` 为 `NaN`, `null`, or `undefined`，则返回 `defaultValue`
 *
 * @since 4.14.0
 * @category Util
 * @param {*} value 要检查的值
 * @param {*} defaultValue 默认值
 * @returns {*} 返回解析后的值
 * @example
 *
 * defaultTo(1, 10)
 * // => 1
 *
 * defaultTo(undefined, 10)
 * // => 10
 */
function defaultTo(value, defaultValue) {
  return (value == null || value !== value) ? defaultValue : value
}

export default defaultTo
