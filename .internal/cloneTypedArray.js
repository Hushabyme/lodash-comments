import cloneArrayBuffer from './cloneArrayBuffer.js'

/**
 * 创建一个 `typedArray` 克隆
 *
 * @private
 * @param {Object} typedArray 要克隆的类型数组
 * @param {boolean} [isDeep] 指定深克隆
 * @returns {Object} 返回克隆的类型数组
 */
function cloneTypedArray(typedArray, isDeep) {
  const buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

export default cloneTypedArray;
