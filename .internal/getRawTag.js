/** 内置方法的引用 */
const objectProto = Object.prototype;

/** 用于检查对象的自身属性 */
const hasOwnProperty = objectProto.hasOwnProperty;

/**
 * 用于值的转换
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 *
 */
const nativeObjectToString = objectProto.toString;

/** 内置值的引用 */
const symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * `baseGetTag` 的一个特殊版本，它忽略 `Symbol.toStringTag` 值
 *
 * @private
 * @param {*} value 要查询的值
 * @returns {string} 返回原始的 `toStringTag`
 */
function getRawTag(value) {
  const isOwn = hasOwnProperty.call(value, symToStringTag);
  const tag = value[symToStringTag];
  let unmasked = false;

  try {
    value[symToStringTag] = undefined;
    unmasked = true
  } catch (e) {}

  const result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

export default getRawTag;
