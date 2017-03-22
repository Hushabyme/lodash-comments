/**
 * 移除数组中所有下列的值，这些值包括: false, null, 0, "", undefined, NaN
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 要压缩的数组
 * @returns {Array} 返回新的过滤值数组
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */

/*
 *
 *  循环遍历
 *  为什么要使用 ++index 而不是 index++ ? 我查了一下，i++ 表示先使用 i，再 +1；而 ++i 表示先自增 1，再使用
 *  好像是在 C++ 语言中 ++i 这样的形式是会快一些，而 JavaScript 解释器是由 C++ 编写的，会不会这上面有一些联系呢？
 *  其实这里将 ++index 换成 index++ 没有区别
 *
 *  第一次遍历：index = 0, resIndex = 0, value = 1, result[0] = 1
 *  第二次遍历：index = 1, resIndex = 1, value = 0, 为 false, 被回收
 *  第三次遍历：index = 2, resIndex = 2, value = 2, result[1] = 2
 *  第四次遍历：index = 3, resIndex = 3, value = undefined, 为 false, 被回收
 *  第五次遍历：index = 4, resIndex = 4, value = false, 为 false, 被回收
 *  第六次遍历：index = 5, index = length，结束循环
 *
 */

function compact(array) {
  let index = -1
  let resIndex = 0
  const length = array == null ? 0 : array.length
  const result = []

  while (++index < length) {
    const value = array[index]
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

export default compact

/*
*
* 思考：
*
* 在这个函数中，我做了一些改变，我觉得将 0 作为 false 抛出，在某些情况下是不合适的
* 如果你需要这种情况，那就使用我下面的这个函数
*
* */

function compact1(array) {
  if(!Array.isArray(array)) return;

  const length = array.length > 0 ? array.length : 0;

  const result = [];

  for(let i = -1, j = 0; i < length; ++i) {
    const value = array[i];

    if(value || array[i] === 0) {
      result[j++] = value;
    }
  }

  return result;
}

const test = compact1([undefined, null, 1, NaN, 0, 2]);
console.log(test);  // [1, 0, 2]
