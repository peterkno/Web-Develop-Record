"use strict";

exports.__esModule = true;
exports.default = void 0;

var _linebreak = _interopRequireDefault(require("linebreak"));

var _variableType = require("./helpers/variableType");

var _StyleContextStack = _interopRequireDefault(require("./StyleContextStack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {string} text
 * @param {boolean} noWrap
 * @returns {Array}
 */
const splitWords = (text, noWrap) => {
  let words = [];

  if (noWrap) {
    words.push({
      text: text
    });
    return words;
  }

  let breaker = new _linebreak.default(text);
  let last = 0;
  let bk;

  while (bk = breaker.nextBreak()) {
    let word = text.slice(last, bk.position);

    if (bk.required || word.match(/\r?\n$|\r$/)) {
      // new line
      word = word.replace(/\r?\n$|\r$/, '');
      words.push({
        text: word,
        lineEnd: true
      });
    } else {
      words.push({
        text: word
      });
    }

    last = bk.position;
  }

  return words;
};
/**
 * @param {Array} words
 * @param {boolean} noWrap
 * @returns {?string}
 */


const getFirstWord = (words, noWrap) => {
  let word = words[0];

  if ((0, _variableType.isUndefined)(word)) {
    return null;
  }

  if (noWrap) {
    // text was not wrapped, we need only first word
    let tmpWords = splitWords(word.text, false);

    if ((0, _variableType.isUndefined)(tmpWords[0])) {
      return null;
    }

    word = tmpWords[0];
  }

  return word.text;
};
/**
 * @param {Array} words
 * @param {boolean} noWrap
 * @returns {?string}
 */


const getLastWord = (words, noWrap) => {
  let word = words[words.length - 1];

  if ((0, _variableType.isUndefined)(word)) {
    return null;
  }

  if (word.lineEnd) {
    return null;
  }

  if (noWrap) {
    // text was not wrapped, we need only last word
    let tmpWords = splitWords(word.text, false);

    if ((0, _variableType.isUndefined)(tmpWords[tmpWords.length - 1])) {
      return null;
    }

    word = tmpWords[tmpWords.length - 1];
  }

  return word.text;
};

class TextBreaker {
  /**
   * @param {string|Array} texts
   * @param {StyleContextStack} styleContextStack
   * @returns {Array}
   */
  getBreaks(texts, styleContextStack) {
    let results = [];

    if (!(0, _variableType.isArray)(texts)) {
      texts = [texts];
    }

    let lastWord = null;

    for (let i = 0, l = texts.length; i < l; i++) {
      let item = texts[i];
      let style = null;
      let words;

      let noWrap = _StyleContextStack.default.getStyleProperty(item || {}, styleContextStack, 'noWrap', false);

      if ((0, _variableType.isObject)(item)) {
        if (item._textRef && item._textRef._textNodeRef.text) {
          item.text = item._textRef._textNodeRef.text;
        }

        words = splitWords(item.text, noWrap);
        style = _StyleContextStack.default.copyStyle(item);
      } else {
        words = splitWords(item, noWrap);
      }

      if (lastWord && words.length) {
        let firstWord = getFirstWord(words, noWrap);
        let wrapWords = splitWords(lastWord + firstWord, false);

        if (wrapWords.length === 1) {
          results[results.length - 1].noNewLine = true;
        }
      }

      for (let i2 = 0, l2 = words.length; i2 < l2; i2++) {
        let result = {
          text: words[i2].text
        };

        if (words[i2].lineEnd) {
          result.lineEnd = true;
        }

        _StyleContextStack.default.copyStyle(style, result);

        results.push(result);
      }

      lastWord = null;

      if (i + 1 < l) {
        lastWord = getLastWord(words, noWrap);
      }
    }

    return results;
  }

}

var _default = TextBreaker;
exports.default = _default;