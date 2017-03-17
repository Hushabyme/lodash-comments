/**
 *  `conformsTo` 方法的基础实现，不同点在于它接受 `props` 检查
 *
 * @private
 * @param {Object} object 指定的对象
 * @param {Object} source 判断属性的对象谓词的相符
 * @returns {boolean} 如果 `object` 相符返回 `true`，否则返回 `false`
 */

function baseConformsTo(object, source, props) {
  let length = props.length;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (length--) {
    const key = props[length];
    const predicate = source[key];
    const value = object[key];

    if ((value === undefined && !(key in object)) || !predicate(value)) {
      return false;
    }
  }
  return true;
}

export default baseConformsTo;
