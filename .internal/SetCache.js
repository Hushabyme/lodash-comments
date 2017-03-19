import MapCache from './MapCache.js'

/** 使用内置的 `undefined` 哈希值 */
const HASH_UNDEFINED = '__lodash_hash_undefined__';

class SetCache {

  /**
   * 用于创建一个数组对象储存唯一的值
   *
   * @private
   * @constructor
   * @param {Array} [values] 要储存的值
   */
  constructor(values) {
    let index = -1;
    const length = values == null ? 0 : values.length;

    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  /**
   * 添加 `value` 到数组仓库中
   *
   * @memberOf SetCache
   * @alias push
   * @param {*} value 要储存的值
   * @returns {Object} 返回仓库实例
   */
  add(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  /**
   * 检查该 `value` 是否存在于该仓库中
   *
   * @memberOf SetCache
   * @param {*} value 搜索的值
   * @returns {number} 如果 `value` 被找到返回 `true`，否则返回 `false`
   */
  has(value) {
    return this.__data__.has(value);
  }
}

SetCache.prototype.push = SetCache.prototype.add;

export default SetCache;
