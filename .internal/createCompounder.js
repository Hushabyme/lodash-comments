import words from '../words.js'

/** 用于匹配撇号 */
const reApos = /['\u2019]/g;

/**
 * 创建一个类似于 `camelCase` 的函数
 *
 * @private
 * @param {Function} callback 组合每个词的函数
 * @returns {Function} 返回新的 compounder 函数
 */
function createCompounder(callback) {
  return (string) => (
    words(`${ string }`.replace(reApos, '')).reduce(callback, '')
  )
}

export default createCompounder
