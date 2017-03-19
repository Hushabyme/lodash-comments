
import Hash from './Hash.js'
import ListCache from './ListCache.js'

/**
 * 获取 `map` 的数据
 *
 * @private
 * @param {Object} map 查询的 map
 * @param {string} key 引用的 key
 * @returns {*} 返回 map 的数据
 */

function getMapData({ __data__ }, key) {
  const data = __data__
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map
}

/**
 * 检查`value`是否适合用作唯一的对象键
 *
 * @private
 * @param {*} value 检查的值
 * @returns {boolean} 如果 `value` 适合则返回 `true`，否则返回 `false`
 */

function isKeyable(value) {
  const type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null)
}

class MapCache {

  /**
   * 创建一个 map 仓库储存 key-value pairs
   *
   * @private
   * @constructor
   * @param {Array} [entries] key-value pairs 储存的地方
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
   * 从 map 中移除所有的 key-value entries
   *
   * @memberOf MapCache
   */

  clear() {
    this.size = 0
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    }
  }

  /**
   * 从 map 中移除 `key` 和它的 value
   *
   * @memberOf MapCache
   * @param {string} key 要删除的 value 的 key
   * @returns {boolean} 如果 entry 被移除则返回 `true`，否则返回 `false`
   */

  delete(key) {
    const result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * 获取`key`的 map 值
   *
   * @memberOf MapCache
   * @param {string} key 获得的 value 的 key
   * @returns {*} 返回 entry 的 value
   */

  get(key) {
    return getMapData(this, key).get(key)
  }

  /**
   * 检查是否存在`key`的 map 值。
   *
   * @memberOf MapCache
   * @param {string} key 检查的 key
   * @returns {boolean} 如果 entry 的 `key` 存在则返回 `true`，否则返回 `false`
   */

  has(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * 给 map 的 `key` 设置 `value`
   *
   * @memberOf MapCache
   * @param {string} key 要设置值的 key
   * @param {*} value 要设置的值
   * @returns {Object} 返回 map 仓库实例
   */

  set(key, value) {
    const data = getMapData(this, key);
    const size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this
  }
}

export default MapCache;
