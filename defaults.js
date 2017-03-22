import eq from './eq.js'
import baseKeysIn from './.internal/baseKeysIn.js'

/** Used for built-in method references. */
const objectProto = Object.prototype

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty

/**
 * 为解析为 `undefined` 的所有目标属性，将源对象的自有和继承的可枚举字符串键属性分配给目标对象
 * 源对象从左到右应用。一旦设置了属性，同一属性的附加值将被忽略
 *
 * **注意:** 这个方法改变了 `object`.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object 目标对象
 * @param {...Object} [sources] 源对象
 * @returns {Object} 返回 `object`.
 * @see defaultsDeep
 * @example
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })
 * // => { 'a': 1, 'b': 2 }
 */
function defaults(object, ...sources) {
  object = Object(object)
  let srcIndex = -1
  const srcLength = sources.length
  while (++srcIndex < srcLength) {
    const source = sources[srcIndex]
    const props = baseKeysIn(source)
    let propsIndex = -1
    const propsLength = props.length
    while (++propsIndex < propsLength) {
      const key = props[propsIndex]
      const value = object[key]
      if (value === undefined ||
           (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key]
      }
    }
  }
  return object
}

export default defaults

/*
*
* 思考：
*
* 从上上面的例子来看，它的用法就是将对象合并为一个对象，那么，如果在遇到有相同的属性的时候，就会覆盖掉前面的
* 这样，在使用中我不知道是否会出现什么副作用
*
* */
