import createCompounder from './.internal/createCompounder.js'

/**
 * 转换 `string` 为
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] 要转换的字符串
 * @returns {string} 返回 kebab cased 字符串
 * @see camelCase, lowerCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 *
 * kebabCase('fooBar')
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__')
 * // => 'foo-bar'
 */
const kebabCase = createCompounder((result, word, index) =>
  result + (index ? '-' : '') + word.toLowerCase()
)

export default kebabCase

/*
*
* 思考：
*
* 所谓 kebab 字符串就是使用 "-" 连接的字符串
* 比如：my-love-is-you，这就是一个 kebab 字符串
*
* */
