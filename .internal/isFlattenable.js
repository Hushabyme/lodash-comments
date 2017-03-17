import isArguments from '../isArguments.js'

/** Built-in value reference. */
const spreadableSymbol = Symbol.isConcatSpreadable;

/**
 * 检查 `value` 是否是一个可展开的 object 或 array
 *
 * @private
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是可展开的则返回 `true`，否则返回 `false`
 */
function isFlattenable(value) {
  return Array.isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

export default isFlattenable;

/*
 *  Symbol.isConcatSpreadable 内置方法可以更改 array 或 array-like 的 Array.prototype.concat() 默认是否可展开
 *  比如：
 *  [1, 2, 3].concat([4, 5, 6]) -> [1, 2, 3, 4, 5, 6] 这是默认情况
 *
 *  更改后：
 *  const arr = [4, 5, 6]
 *  arr[Symbol.isConcatSpreadable] = false
 *  [1, 2, 3].concat(arr) -> [1, 2, 3, [4, 5, 6]]
 */

/**
*
* Test
*
* */




