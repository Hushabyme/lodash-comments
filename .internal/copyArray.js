/**
 * 将 `source` 的值复制到 `array`
 *
 * @private
 * @param {Array} source 要从中复制值的数组
 * @param {Array} [array=[]] 要将值复制到的数组
 * @returns {Array} 返回 `array`
 */
function copyArray(source, array) {
  let index = -1;
  const length = source.length;

  array || (array = new Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

export default copyArray;
