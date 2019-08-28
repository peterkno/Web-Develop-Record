"use strict";

exports.__esModule = true;
exports.default = void 0;

var _OutputDocument = _interopRequireDefault(require("./OutputDocument"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OutputDocumentServer extends _OutputDocument.default {
  /**
   * @param {string} filename
   */
  write(filename) {
    this.getStream().pipe(_fs.default.createWriteStream(filename));
    this.getStream().end();
  }

}

var _default = OutputDocumentServer;
exports.default = _default;