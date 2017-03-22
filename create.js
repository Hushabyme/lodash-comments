/**
 * 创建从 `properties` 对象继承的对象
 * 如果给出了一个 `properties` 对象，它自己的可枚举字符串键入的属性被分配给创建的对象
 *
 * @since 2.3.0
 * @category Object
 * @param {Object} prototype 要继承的对象
 * @param {Object} [properties] 要分配给对象的属性.
 * @returns {Object} 返回新对象
 * @example
 *
 * function Shape() {
 *   this.x = 0
 *   this.y = 0
 * }
 *
 * function Circle() {
 *   Shape.call(this)
 * }
 *
 * Circle.prototype = create(Shape.prototype, {
 *   'constructor': Circle
 * })
 *
 * const circle = new Circle
 * circle instanceof Circle
 * // => true
 *
 * circle instanceof Shape
 * // => true
 */
function create(prototype, properties) {
  prototype = prototype === null ? null : Object(prototype)
  const result = Object.create(prototype)
  return properties == null ? result : Object.assign(result, properties)
}

export default create

// 该方法就是 Object.create() 方法的替代品
