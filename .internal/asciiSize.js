/**
 * 获取一个 ASCII `string` 的 size
 *
 * @private
 * @param {string} string 字符串检查
 * @returns {number} 返回字符串大小
 */

function asciiSize({ length }) {
  return length;
}

export default asciiSize;

/**
 * 这里我们还是利用了解构赋值的知识
 * {length} 参数，当我们放入比如字符串 'abc' 的时候，它会返回 'abc'.length，也就是 3
 *
 * 这个设计十分巧妙！被惊艳到了！
 *
 */

// test
function test({length}) {
  return length;
}

console.log(test('abc'));  // 3
