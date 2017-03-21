/**
 * 适用于严格相等比较的源值的 `matchesProperty` 的专用版本，例如 `===`
 *
 * @private
 * @param {string} key 获得属性的 key
 * @param {*} srcValue 要匹配的值
 * @returns {Function} 返回新的指定的函数
 */
function matchesStrictComparable(key, srcValue) {
  return (object) => {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)))
  }
}

export default matchesStrictComparable;
