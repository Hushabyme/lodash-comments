/**
 * 创建一个由反转键和 `object` 值组成的对象
 * 如果 `object` 包含重复值，则后续值覆盖前面的值的属性分配
 *
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * const object = { 'a': 1, 'b': 2, 'c': 1 }
 *
 * invert(object)
 * // => { '1': 'c', '2': 'b' }
 */

function invert(object) {
  const result = {}
  Object.keys(object).forEach((value, key) => {
    result[value] = key
  })
  return result
}

export default invert

/*
*
* 思考：
*
* 这个函数很奇怪啊？看起来就感觉不对劲，没想到测试完后，还真是和上面的测试不一样
* 这样看来，还是不要使用它的好
*
* */

const obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(invert(obj));  // { a: 0, b: 1, c: 2 }

