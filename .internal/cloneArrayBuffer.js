/**
 * 创建一个克隆的 `arrayBuffer`
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer 要克隆的数组 buffer
 * @returns {ArrayBuffer} 返回克隆后的 数组 buffer
 */
function cloneArrayBuffer(arrayBuffer) {
  const result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

export default cloneArrayBuffer;
