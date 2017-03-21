import baseIsMatch from './baseIsMatch.js'
import getMatchData from './getMatchData.js'
import matchesStrictComparable from './matchesStrictComparable.js'

/**
 * `matches` 方法的基础实现，但它不包括 `source`
 *
 * @private
 * @param {Object} source 要匹配的对象的属性值
 * @returns {Function} 返回新的指定的函数
 */
function baseMatches(source) {
  const matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return (object) => object === source || baseIsMatch(object, source, matchData);
}

export default baseMatches;
