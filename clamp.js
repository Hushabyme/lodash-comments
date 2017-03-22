/**
 * 在包含的 `lower` 和 `upper` 边界内的 `number`
 *
 * @since 4.0.0
 * @category Number
 * @param {number} number 要包裹的数
 * @param {number} lower 底边界
 * @param {number} upper 顶边界
 * @returns {number} 返回被包裹的数
 * @example
 *
 * clamp(-10, -5, 5)
 * // => -5
 *
 * clamp(10, -5, 5)
 * // => 5
 */

function clamp(number, lower, upper) {
  number = +number
  lower = +lower
  upper = +upper
  lower = lower === lower ? lower : 0
  upper = upper === upper ? upper : 0
  if (number === number) {
    number = number <= upper ? number : upper
    number = number >= lower ? number : lower
  }
  return number
}

// export default clamp

// 这个函数还是比较简单和好理解的，但这个函数有一个问题，那就是它的参数和它实际的参数是不一致的
// 如果是这样，我们为什么不自己动手实现一个同样功能的呢？

function middle(...args) {
  const length = args.length;

  if(length.length < 3) return new Error('arguments must more than 2');

  args = args.sort((a, b) => a - b);
  return args.slice(1, length - 1);
}

console.log(middle(-5, 0, 5, 10));  // [0, 5]

// 这里我假定我们的参数为 3 个或者 3 个以上
// 我们使用这个函数后，返回的是一个数组，接着，我们就可以对这个数组进行一些其他的运算了
// 这样更加的方便

