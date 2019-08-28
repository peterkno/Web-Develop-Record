
var fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf',
		bolditalics: 'fonts/Roboto-MediumItalic.ttf'
	},
	MSFont: {
		normal: 'src/fonts/ms.ttf',
		bold: 'src/fonts/ms.ttf',
		italics: 'src/fonts/ms.ttf',
		bolditalics: 'src/fonts/ms.ttf', 
	} 
};

var pdfmake = require('./js/index');
var htmlToPdfMake = require("html-to-pdfmake");
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
var { window } = new JSDOM("");
pdfmake.setFonts(fonts);
let tmp = 123;

var html = htmlToPdfMake(`
  <div>
    <h1>My title</h1>
    <p>
      這個句子是${tmp} with a <strong>bold word</strong>, <em>one in italic</em>,
      and <u>one with underline</u>. And finally <a href="https://www.somewhere.com">a link</a>.
    </p>
  </div>
  `, window);

var str = "123";
var docDefinition = {
	defaultStyle: {
		font: 'MSFont'
	},
	content: [
		html
	],
};

var now = new Date();

var pdf = pdfmake.createPdf(docDefinition);
pdf.write('data/pdfs/test.pdf');

console.log(new Date() - now);
