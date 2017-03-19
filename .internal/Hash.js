/** 用于替换为 undefined 的 hash 值 */
const HASH_UNDEFINED = '__lodash_hash_undefined__';

class Hash {

  /**
   * 创建一个 hash 对象
   *
   * @private
   * @constructor
   * @param {Array} [entries] 表示该 array 的键值对
   */

  constructor(entries) {
    let index = -1;
    const length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      const entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * 从 hash 中移除所有的 entries
   *
   * @memberOf Hash
   */

  clear() {
    this.__data__ = Object.create(null);
    this.size = 0;
  }

  /**
   * 从 hash 中移除 `key` 和它的 value
   *
   * @memberOf Hash
   * @param {Object} hash 要修改的 hash
   * @param {string} key 移除的键的值
   * @returns {boolean} 如果 entry 被移除了就返回 `true`，否则返回 `false`
   */

  delete(key) {
    const result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result
  }

  /**
   * 获取 hash 值中的 `key`
   *
   * @memberOf Hash
   * @param {string} key 所要获取的 key
   * @returns {*} 返回 entry 值
   */

  get(key) {
    const data = this.__data__;
    const result = data[key];
    return result === HASH_UNDEFINED ? undefined : result
  }

  /**
   * 检查 hash 值中的 `key` 是否存在
   *
   * @memberOf Hash
   * @param {string} key 该 key 就是 entry 想要检查的
   * @returns {boolean} 如果 `key` 存在则返回 `true`，否则返回 `false`
   */

  has(key) {
    const data = this.__data__;
    return data[key] !== undefined;
  }

  /**
   * 为 `value` 设置 hash 的 `key`
   *
   * @memberOf Hash
   * @param {string} key 该 key 的值就是想要设置的
   * @param {*} value 要设置的值
   * @returns {Object} 返回 hash 的实例
   */

  set(key, value) {
    const data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = value === undefined ? HASH_UNDEFINED : value;
    return this;
  }
}

export default Hash
