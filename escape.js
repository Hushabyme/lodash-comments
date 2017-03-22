/** Used to map characters to HTML entities. */
const htmlEscapes = {
  '&': '&amp',
  '<': '&lt',
  '>': '&gt',
  '"': '&quot',
  "'": '&#39'
}

/** 用于匹配 HTML 实体和 HTML 字符 */
const reUnescapedHtml = /[&<>"']/g
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source)

/**
 *将 `string` 中的字符 '＆', '<', '>', '"' 和 "'" 转换为相应的 HTML 实体
 *
 * **Note:** 没有其他字符被转义 To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @since 0.1.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @see escapeRegExp, unescape
 * @example
 *
 * escape('fred, barney, & pebbles')
 * // => 'fred, barney, &amp pebbles'
 */
function escape(string) {
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, (chr) => htmlEscapes[chr])
    : string
}

export default escape
