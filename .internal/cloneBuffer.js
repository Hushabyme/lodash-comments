import root from './root.js'

/** 检测自由变量 `exports` */
const freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** 检测自由变量 `module` */
const freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** 检测流行的 CommonJS 扩展 `module.exports` */
const moduleExports = freeModule && freeModule.exports === freeExports;

/** 内置值引用 */
const Buffer = moduleExports ? root.Buffer : undefined, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * 创建一个 `buffer` 的克隆
 *
 * @private
 * @param {Buffer} buffer 要克隆的 buffer
 * @param {boolean} [isDeep] 制定一个深克隆
 * @returns {Buffer} 返回克隆后的 buffer
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  const length = buffer.length;
  const result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length)

  buffer.copy(result);
  return result;
}

export default cloneBuffer;
