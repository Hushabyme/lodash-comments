import capitalize from './capitalize.js'
import createCompounder from './.internal/createCompounder.js'

/**
 * 将 `string` 转换为 [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] 要转换的字符串
 * @returns {string} 返回转换后的驼峰字符串
 * @see lowerCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
const camelCase = createCompounder((result, word, index) => {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word)
});

export default camelCase
