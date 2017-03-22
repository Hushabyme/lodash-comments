export { default } from './head.js'

/*
*
* 思考：
*
* 这个方法返回数组的第一个元素，如果没有数组，则返回 undefined
*
* */

function first(array) {
  // 其实这里的 array[0] 也可以替换成 array.shift()
  return (array !== null && array.length) ? array[0] : undefined;
}

console.log(first([1, 2, 3]));
