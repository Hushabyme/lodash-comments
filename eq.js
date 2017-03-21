/**
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 *
 * 比较两个值以确定它们是否相等
 *
 * @param {*} value 比较的值
 * @param {*} other 另一个要比较的值
 * @returns {boolean} 如果相等则返回 `true`，否则返回 `false`
 *
 */

/*
 *
 * JavaScript 内置相等的抽象对比：
 * 1. 判断两个值是否类型相等，如果不相等，则返回 false
 * 2. 如果是 Number，则 NaN = NaN; -0 = 0; 0 = -0; 两个数值相等，也相等
 * 3. 如果是 String，则判断它们的 code units 是否相等
 * 4. 如果是 Boolean，则判断是否为 true 或 false
 * 5. 如果是 Symbol，如果两个值是相等的 symbol，则相等，否则不相等
 * 6. 如果是 Object，如果是同一个对象，则相等，否则不相等
 *
 * */

function eq(value, other) {
  return value === other || (value !== value && other !== other)
}

export default eq;
