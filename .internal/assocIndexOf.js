import eq from '../eq.js'

/**
 * 获取在 `array` 的键值对中找到的 `key` 的索引值
 *
 * @private
 * @param {Array} array 要检查的数组
 * @param {*} key 寻找的键
 * @returns {number} 返回匹配的索引值的值，如果没找到则返回 `-1`
 */

function assocIndexOf(array, key) {
  let { length } = array;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

export default assocIndexOf;

/*
 * ES6 的解构赋值：{1, 2} = array
 * 使用 array[1], array[2]
 *
 * 在上面的函数中， {length} = array 实际上就将 array.length 赋值给 length
 * 也就是说：length = array.length，比如 array = [1, 2, 3]，那么 length 也就是 [1, 2, 3].length = 3
 *
 * */

/*
 *
 * 这里，我 test 了一下 console.log(assocIndexOf(['a','b','a'],'a'));  // 2
 * 也就是说，该函数是从后向前遍历的，因此，会跳过第一个 'a'，这显然没有问题，函数就是这么写的
 *
 * */

// 那么，我用内置的方法测试一下

// test
function assocIndexOf1(array, key) {
  return array.indexOf(key);
}
console.log(assocIndexOf1(['a','b','a'],'a'));  // 0

// 我们可以明显的看出 `lodash` 中的这个函数其实和内置的不一样，与 lastIndexOf() 方法一致
// 当然，这里是放在 internal 中，不是公开的方法，所以需要再看看它的适用性

// 在这里我进行了思考，假设我要找到数组中所有的相等的值应该怎么办？
// 尝试写一下:

function findEqualIndex(array, key) {
  if(!Array.isArray(array)) return;

  const result = [];

  array.map((value, index) => {
    if(value === key) {
      result.push(index);
    }
  });

  return result;
}

console.log(findEqualIndex(['a', 'b', 'a', 'c', 'a'], 'a'));  // [0, 2, 4]

// 如果我想要获取相同的值的索引，我就可以使用上面的写法
