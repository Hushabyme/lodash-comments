/**
 * 从 `object` 的可枚举属性创建一个函数属性名称数组
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object 查询的对象
 * @returns {Array} 返回函数名
 * @see functionsIn
 * @example
 *
 * function Foo() {
 *   this.a = constant('a')
 *   this.b = constant('b')
 * }
 *
 * Foo.prototype.c = constant('c')
 *
 * functions(new Foo)
 * // => ['a', 'b']
 */
function functions(object) {
  if (object == null) {
    return []
  }
  return Object.keys(object).filter((key) => typeof object[key] == 'function')
}

export default functions
