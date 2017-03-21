import asciiWords from './.internal/asciiWords.js'
import hasUnicodeWord from './.internal/hasUnicodeWord.js'
import unicodeWords from './.internal/unicodeWords.js'

/**
 * 将 `string` 分割成其字的数组
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] 要检查的字符串
 * @param {RegExp|string} [pattern] 匹配单词的模式.
 * @returns {Array} 返回 `string` 的单词
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern) {
  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string)
  }
  return string.match(pattern) || []
}

export default words
