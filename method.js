import invoke from './invoke.js'

/**
 * 创建一个调用给定对象的 `path` 方法的函数
 * 任何其他参数都被提供给被调用的方法
 *
 * @since 3.7.0
 * @category Util
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} [args] The arguments to invoke the method with.
 * @returns {Function} Returns the new invoker function.
 * @example
 *
 * const objects = [
 *   { 'a': { 'b': constant(2) } },
 *   { 'a': { 'b': constant(1) } }
 * ]
 *
 * map(objects, method('a.b'))
 * // => [2, 1]
 *
 * map(objects, method(['a', 'b']))
 * // => [2, 1]
 */
function method(path, args) {
  return (object) => invoke(object, path, args)
}

export default method
