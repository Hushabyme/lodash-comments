/* 与其他 `lodash` 方法同名的内置方法引用 */
const nativeMax = Math.max;
const nativeMin = Math.min;

/**
 * `inRange` 的基本实现，不强制参数
 *
 * @private
 * @param {number} number 检查的数字
 * @param {number} start 开始的范围
 * @param {number} end 结束的范围
 * @returns {boolean} 如果 `number` 再此范围内返回`true` ，否则返回 `false`.
 */
function baseInRange(number, start, end) {
  return number >= nativeMin(start, end) && number < nativeMax(start, end);
}

export default baseInRange;


// 这个方法非常值得我们去学习，如果我们要判断一个数值是否在给定的区间内
// 我们可能会直接使用 number > min && number < max

// 例如

function inRange(number, start, end) {
  return number >= start && number < end;
}

// 上面的写法有问题吗？当然是没有
// 但问题就在于它没有问题，假如我不小心将 start 和 end 写反了呢？
// 那么使用 Math.min() 和 max 方法是非常有必要的，这样就解决了这个问题
// 这也是我们在程序设计的时候，要将使用者的容错率提高，以免需要重新修改参数或者改变整个方法
