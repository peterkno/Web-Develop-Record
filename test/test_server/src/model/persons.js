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


let i = 0;
let loopStr = '';
for(i = 0; i < 5; i++) {
    loopStr += `<p>Loop ${i}</p>`;
} 



function list(searchText = '') {
    return new Promise((resolve, reject) => {
        if(!fs.existsSync('data-persons.json')) {
            fs.writeFileSync('data-persons.json', '');
        }

        fs.readFile('data-persons.json', 'utf8', (err,data) => {
            if (err) reject(err);

            let persons = data ? JSON.parse(data) : [];
            
            if(persons.length > 0 && searchText) {
                persons = persons.filter(p => {
                    return p.personalID.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
                });
            }
            console.log("Person Model: " + persons);
            resolve(persons);
        })
    })
}

function create(newPerson) {
    return new Promise((resolve, reject) => {
        console.log("Perpare Create Peronal Info");
        // const newPerson = {
        //     personalID : String(personalID),
        //     heritage : Number(heritage)
        // };

        list().then(persons => {
            persons = [
                newPerson,
                ...persons
            ];
            fs.writeFile('data-persons.json', JSON.stringify(persons), err => {
                if (err) reject(err);

                resolve(newPerson);
            })
        })
        console.log("Finish Create Peronal Info(JSON)");

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
        var loopHtml = htmlToPdfMake(loopStr, window);
        var docDefinition = {
            defaultStyle: {
                font: 'MSFont'
            },
            content: [
                loopHtml
            ],
        };

        var now = new Date();

        var pdf = pdfmake.createPdf(docDefinition);
        pdf.write(`dist/persons/${newPerson.personalID}.pdf`);
        console.log("Finish Create Peronal Info(PDF)");
        console.log(new Date() - now);

    })
}

module.exports = {
    list,
    create
};