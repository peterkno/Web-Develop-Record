"use strict";

exports.__esModule = true;
exports.default = void 0;

var _Printer = _interopRequireDefault(require("./Printer"));

var _tools = require("./helpers/tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class pdfmake {
  createPdf(docDefinition) {
    let options = {};
    options.progressCallback = this.progressCallback;
    options.tableLayouts = this.tableLayouts; // TODO: options.bufferPages

    let printer = new _Printer.default(this.fonts);
    let doc = printer.createPdfKitDocument(docDefinition, options);
    return this._transformToDocument(doc);
  }

  setProgressCallback(callback) {
    this.progressCallback = callback;
  }

  addTableLayouts(tableLayouts) {
    this.tableLayouts = (0, _tools.pack)(this.tableLayouts, tableLayouts);
  }

  setTableLayouts(tableLayouts) {
    this.tableLayouts = tableLayouts;
  }

  clearTableLayouts() {
    this.tableLayouts = {};
  }

  addFonts(fonts) {
    this.fonts = (0, _tools.pack)(this.fonts, fonts);
  }

  setFonts(fonts) {
    this.fonts = fonts;
  }

  clearFonts() {
    this.fonts = {};
  }

  _transformToDocument(doc) {
    return doc;
  }

}

var _default = pdfmake;
exports.default = _default;