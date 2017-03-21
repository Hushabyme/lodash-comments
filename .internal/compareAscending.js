import isSymbol from '../isSymbol.js'

/**
 * 比较值以按升序对它们排序
 *
 * @private
 * @param {*} value 要比较的值
 * @param {*} other 其它要比较的值
 * @returns {number} 返回 `value` 的排序顺序指示符
 */
function compareAscending(value, other) {
  if (value !== other) {
    const valIsDefined = value !== undefined;
    const valIsNull = value === null;
    const valIsReflexive = value === value;
    const valIsSymbol = isSymbol(value);

    const othIsDefined = other !== undefined;
    const othIsNull = other === null;
    const othIsReflexive = other === other;
    const othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

export default compareAscending;
