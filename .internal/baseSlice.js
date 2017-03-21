/**
 * `slice` 的基本实现
 *
 * @private
 * @param {Array} array 要剪切的数组
 * @param {number} [start=0] 开始的位置
 * @param {number} [end=array.length] 结束的位置
 * @returns {Array} 返回剪切后的 `array`
 */
function baseSlice(array, start, end) {
  let index = -1;
  let { length } = array;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  const result = new Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

export default baseSlice;
