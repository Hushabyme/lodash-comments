import memoizeCapped from './memoizeCapped.js'

const reEscapeChar = /\\(\\)?/g;
const reLeadingDot = /^\./;
const rePropName = new RegExp(
  // 匹配任何不是点或括号的内容
  '[^.[\\]]+' + '|' +
  // 或匹配属性名称在括号内
  '\\[(?:' +
    // 匹配非字符串表达式
    '([^"\'].*)' + '|' +
    // 或匹配字符串（支持转义字符）
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
  ')\\]'+ '|' +
  // 或匹配 "" 作为连续点或空括号之间的间距
  '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))'
, 'g');

/**
 * 将 `string` 转换为属性路径数组。
 *
 * @private
 * @param {string} string 要转换的字符串
 * @returns {Array} 返回属性路径数组
 */
const stringToPath = memoizeCapped((string) => {
  const result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, (match, expression, quote, string) => {
    let key = match;
    if (quote) {
      key = string.replace(reEscapeChar, '$1')
    }
    else if (expression) {
      key = expression.trim();
    }
    result.push(key);
  });
  return result;
});

export default stringToPath;
