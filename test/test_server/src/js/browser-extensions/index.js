"use strict";

exports.__esModule = true;
exports.default = void 0;

var _base = _interopRequireDefault(require("../base"));

var _OutputDocumentBrowser = _interopRequireDefault(require("./OutputDocumentBrowser"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Lazy loading for support on unsupported browsers (see issue https://github.com/bpampuch/pdfmake/issues/1663)
let defaultClientFonts = {
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  }
};

const isBrowserSupported = () => {
  // Ensure the browser provides the level of support needed
  if (!Object.keys || typeof Uint16Array === 'undefined') {
    return false;
  }

  return true;
};

class pdfmake extends _base.default {
  constructor() {
    super();
    this.fonts = defaultClientFonts;
  }

  createPdf(docDefinition) {
    if (!isBrowserSupported()) {
      throw new Error('Your browser does not provide the level of support needed');
    }

    return super.createPdf(docDefinition);
  }

  addVirtualFileSystem(vfs) {
    _fs.default.bindFS(vfs); // bind virtual file system to file system

  }

  _transformToDocument(doc) {
    return new _OutputDocumentBrowser.default(doc);
  }

}

var _default = new pdfmake();

exports.default = _default;