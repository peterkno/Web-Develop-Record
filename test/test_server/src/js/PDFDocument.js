"use strict";

exports.__esModule = true;
exports.default = void 0;

var _pdfkit = _interopRequireDefault(require("pdfkit"));

var _variableType = require("./helpers/variableType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const typeName = (bold, italics) => {
  let type = 'normal';

  if (bold && italics) {
    type = 'bolditalics';
  } else if (bold) {
    type = 'bold';
  } else if (italics) {
    type = 'italics';
  }

  return type;
};

class PDFDocument extends _pdfkit.default {
  constructor(fonts = {}, images = {}, options = {}) {
    super(options);
    this.fonts = {};
    this.fontCache = {};

    for (let font in fonts) {
      if (fonts.hasOwnProperty(font)) {
        let fontDef = fonts[font];
        this.fonts[font] = {
          normal: fontDef.normal,
          bold: fontDef.bold,
          italics: fontDef.italics,
          bolditalics: fontDef.bolditalics
        };
      }
    }

    this.images = images;
  }

  provideFont(familyName, bold, italics) {
    let type = typeName(bold, italics);

    if (!this.fonts[familyName] || !this.fonts[familyName][type]) {
      throw new Error(`Font '${familyName}' in style '${type}' is not defined in the font section of the document definition.`);
    }

    this.fontCache[familyName] = this.fontCache[familyName] || {};

    if (!this.fontCache[familyName][type]) {
      let def = this.fonts[familyName][type];

      if (!(0, _variableType.isArray)(def)) {
        def = [def];
      }

      this.fontCache[familyName][type] = this.font(...def)._font;
    }

    return this.fontCache[familyName][type];
  }

  provideImage(src) {
    const realImageSrc = src => {
      let image = this.images[src];

      if (!image) {
        return src;
      }

      let index = image.indexOf('base64,');

      if (index < 0) {
        return this.images[src];
      }

      return Buffer.from(image.substring(index + 7), 'base64');
    };

    if (this._imageRegistry[src]) {
      return this._imageRegistry[src];
    }

    let image;

    try {
      image = this.openImage(realImageSrc(src));

      if (!image) {
        throw new Error('No image');
      }
    } catch (error) {
      throw new Error(`Invalid image: ${error.toString()}\nImages dictionary should contain dataURL entries (or local file paths in node.js)`);
    }

    image.embed(this);
    this._imageRegistry[src] = image;
    return image;
  }

  setOpenActionAsPrint() {
    let printActionRef = this.ref({
      Type: 'Action',
      S: 'Named',
      N: 'Print'
    });
    this._root.data.OpenAction = printActionRef;
    printActionRef.end();
  }

}

var _default = PDFDocument;
exports.default = _default;