import root from './.internal/root.js'

/** 检测自由变量 `exports` */
const freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** 检测自由变量 `module` */
const freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** 检测流行的 CommonJS 扩展 `module.exports` */
const moduleExports = freeModule && freeModule.exports === freeExports;

/** 内置值引用 */
const Buffer = moduleExports ? root.Buffer : undefined;

/** 与其他 `lodash` 方法同名的内置方法引用。 **/
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * 检查`value`是否是一个 buffer
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是一个 buffer，返回 `true`，否则为 `false`
 * @example
 *
 * isBuffer(new Buffer(2))
 * // => true
 *
 * isBuffer(new Uint8Array(2))
 * // => false
 */
const isBuffer = nativeIsBuffer || (() => false);

export default isBuffer;
