/** 用于匹配由字母数字字符组成的单词 */
// 经查阅，这段正则的意思是 去除非法的字符
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g

/**
 * 将 ASCII 字符串拆分为其词的数组
 *
 * @private
 * @param {string} 要检查的字符串
 * @returns {Array} 返回 `string` 的词
 */

function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

export default asciiWords;
