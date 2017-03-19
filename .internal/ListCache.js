import assocIndexOf from './assocIndexOf.js'

/** 内置的值的引用 */
const splice = Array.prototype.splice;

class ListCache {

  /**
   * 创建一个 List 仓库实体
   *
   * @private
   * @constructor
   * @param {Array} [entries] 储存 key-value pairs
   */
  constructor(entries) {
    let index = -1;
    const length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      const entry = entries[index];
      this.set(entry[0], entry[1])
    }
  }

  /**
   * 移除所有的 key-value entries 从 list 仓库中
   *
   * @memberOf ListCache
   */
  clear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * 从列表仓库中移除 `key` 和它的值
   *
   * @memberOf ListCache
   * @param {string} key 要移除的值
   * @returns {boolean} 如果 entry 被移除了则返回 `true`，否则返回 `false`
   */

  delete(key) {
    const data = this.__data__;
    const index = assocIndexOf(data, key);

    if (index < 0) {
      return false
    }
    const lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true
  }

  /**
   * 获取列表仓库中 `key` 的值
   *
   * @memberOf ListCache
   * @param {string} key 获取的值
   * @returns {*} 返回 entry 的值
   */

  get(key) {
    const data = this.__data__;
    const index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  /**
   * 检查列表仓库中 `key` 是否存在
   *
   * @memberOf ListCache
   * @param {string} key 检查 entry 的 key
   * @returns {boolean} 如果 entry 的 `key` 存在则返回 `true`，否则返回 `false`
   */

  has(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * 设置列表仓库 `key` 的 `value`
   *
   * @memberOf ListCache
   * @param {string} key 要设置的值的 key
   * @param {*} value 要设置的值
   * @returns {Object} 返回列表仓库实例
   */

  set(key, value) {
    const data = this.__data__;
    const index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this
  }
}

export default ListCache
