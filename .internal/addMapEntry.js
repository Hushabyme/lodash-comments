/**
 * 添加 key-value `pair` 给 `map`
 *
 * @private
 * @param {Object} map 要修改的 map
 * @param {Array} pair 要增加的 key-value pair
 * @returns {Object} `map`
 */

function addMapEntry(map, pair) {
  // 这里没有直接返回 `map.set()` 是因为 IE11 中这样不可链式调用
  map.set(pair[0], pair[1]);
  return map;
}

export default addMapEntry;

/**
 *
 * 这里我们可以学习到 Map.set() 方法
 * 这个方法其实很很简单，就是传入 key-value pairs
 * 比如：new Map().set('a', 1)
 *
 * 另外，就是它支持链式调用
 *
 * 不过这里有一个小小的问题，那就是 Map 和 Set 中不可以有重复的值
 * new Map().set('a', 1).set('a', 2);
 * 这是不可以的，因为后面的会覆盖前面的，即便 Map 和 Set 是 Object 的实例
 */

// test1
const myMap = new Map();
myMap.set('a', 1).set('b', 2);
console.log(myMap);  // Map { 'a' => 1, 'b' => 2 }

// test2
const myMap1 = new Map();
myMap1.set('a', 1).set('a', 2);
console.log(myMap1);  // Map { 'a' => 2 }

// test3
console.log(new Map() instanceof Object);  // true
console.log(new Set() instanceof Object);  // true

// test4
function addMapEntry1(map, pair) {
  map.set(pair[0], pair[1]);

  return map;
}

const myMap2 = new Map();
addMapEntry1(myMap2, ['a', 1]);
console.log(myMap2);  // Map { 'a' => 1 }

// 举一反三
// 我们现在也可以设计一个 Set 的函数了

/*
 *
 * 注意！在 Set 中，不能使用 set() 方法，要使用 add() 方法来添加！
 *
 * */

function addSetEntry(set, value) {
  set.add(value);

  return set;
}

const mySet = new Set();
addSetEntry(mySet, 1);
addSetEntry(mySet, 2);
console.log(mySet);  // Set { 1, 2 }
