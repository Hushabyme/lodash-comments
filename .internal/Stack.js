import ListCache from './ListCache.js'
import MapCache from './MapCache.js'

// 用作 size 能够大型数组优化
const LARGE_ARRAY_SIZE = 200;

class Stack {

  /**
   * 创建一个 stack 仓库储存 key-value pairs
   *
   * @private
   * @constructor
   * @param {Array} [entries] 储存的 key-value pairs
   */
  constructor(entries) {
    const data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  /**
   * 从 stack 中移除所有的 key-value entries
   *
   * @memberOf Stack
   */
  clear() {
    this.__data__ = new ListCache;
    this.size = 0;
  }

  /**
   * 从 stack 中移除 `key` 以及它的值
   *
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  delete(key) {
    const data = this.__data__;
    const result = data['delete'](key);

    this.size = data.size;
    return result
  }

  /**
   * 获取 `key` 的值
   *
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  get(key) {
    return this.__data__.get(key);
  }

  /**
   * 检查 `key` 的值是否存在
   *
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  has(key) {
    return this.__data__.has(key);
  }

  /**
   * 设置 `key` 的值
   *
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  set(key, value) {
    let data = this.__data__;
    if (data instanceof ListCache) {
      const pairs = data.__data__;
      if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs)
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
}

export default Stack
