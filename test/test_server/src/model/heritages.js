const fs = require('fs');
const uuid = require('uuid/v4');

const fonts = {
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

const pdfmake = require('../js/index');
const htmlToPdfMake = require("html-to-pdfmake");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM("");
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

function list(searchText = '') {
    return new Promise((resolve, reject) => {
        if(!fs.existsSync('data-heritages.json')) {
            fs.writeFileSync('data-heritages.json', '');
        }

        fs.readFile('data-heritages.json', 'utf8', (err,data) => {
            if (err) reject(err);

            let heritages = data ? JSON.parse(data) : [];
            
            if(heritages.length > 0 && searchText) {
                heritages = heritages.filter(h => {
                    return h.personalID.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
                });
            }
            console.log("Model: " + heritages);
            resolve(heritages);
        })
    })
}

function create(personalID, heritage) {
    return new Promise((resolve, reject) => {
        const newHeritage = {
            personalID : String(personalID),
            heritage : Number(heritage)
        };

        list().then(heritages => {
            heritages = [
                newHeritage,
                ...heritages
            ];
            fs.writeFile('data-heritages.json', JSON.stringify(heritages), err => {
                if (err) reject(err);

                resolve(newHeritage);
            })
        })
    })
}

module.exports = {
    list,
    create
};