/** 用于检测需要更强大的正则表达式匹配单词的字符串 */
const reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * 检查 `string` 是否包含由 Unicode 符号组成的单词
 *
 * @private
 * @param {string} string 要检查的字符串
 * @returns {boolean} 如果找到一个单词，返回 `true`，否则返回 `false`
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string)
}

export default hasUnicodeWord
