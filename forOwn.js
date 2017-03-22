/**
 * 迭代一个对象的自己可枚举的字符串键控属性，并为每个属性调用 `iteratee`
 * 迭代器被调用三个位置：（value，key，object）
 * Iteratee 函数可以通过明确返回 `false` 来提早退出迭代
 *
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @see forEach, forEachRight, forIn, forInRight, forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * forOwn(new Foo, function(value, key) {
 *   console.log(key)
 * })
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  if (object != null) {
    Object.keys(Object(object)).forEach((key) => iteratee(object[key], key, object))
  }
}

export default forOwn
