/**
 * 转换一个 ASCII `string` 为数组
 *
 * @private
 * @param {string} string 要转换的字符串
 * @returns {Array} 返回转换后的数组
 */

function asciiToArray(string) {
  return string.split('');
}

export default asciiToArray;
