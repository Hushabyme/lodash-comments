
/**
 * 如果不是一个值，则将 `value` 转换为数组
 *
 * @since 4.4.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {Array} 返回转换后的数组
 * @example
 *
 * castArray(1)
 * // => [1]
 *
 * castArray({ 'a': 1 })
 * // => [{ 'a': 1 }]
 *
 * castArray('abc')
 * // => ['abc']
 *
 * castArray(null)
 * // => [null]
 *
 * castArray(undefined)
 * // => [undefined]
 *
 * castArray()
 * // => []
 *
 * const array = [1, 2, 3]
 * console.log(castArray(array) === array)
 * // => true
 */
function castArray(...args) {
  if (!args.length) {
    return []
  }
  const value = args[0]
  return Array.isArray(value) ? value : [value]
}

export default castArray

/*
*
* 总结：
*
* 这个方法很奇怪，它只返回第一个值，那既然只返回第一个值，为什么要用 ...？直接使用 value 不就好了吗
* 我个人感觉这个方法很是奇葩。。所以，学了这么久的 lodash 源码，我发现我学会了很多思想
* 下面就是我写的一个函数
*
* */
function cast(...args) {
  if(Array.isArray(args)) {
    return args;
  }

  let index = -1;
  const length = args.length;

  const result = [];

  while (++index < length) {
    result.push(args[index])
  }

  return result;
}

console.log(cast(1, 2, 3));  // [1, 2, 3]
console.log(cast([1], [2], [3]));  // [[1], [2], [3]]

