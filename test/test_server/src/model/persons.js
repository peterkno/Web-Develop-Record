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

        let htmlStr = _listPersonalInfo(newPerson);
        var html = htmlToPdfMake(htmlStr, window);
        var loopHtml = htmlToPdfMake(loopStr, window);
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
        pdf.write(`dist/persons/${newPerson.personalID}.pdf`);
        console.log("Finish Create Peronal Info(PDF)");
        console.log(new Date() - now);

    })
}

function _listPersonalInfo(newPerson) {
    let htmlStr = '';
    htmlStr += `<div>`;
    htmlStr += `<h3>會員資訊</h3>`;
    htmlStr += `<p>中文姓名:${newPerson.chineseName} 英文姓名:${newPerson.chineseName}</p>`;
    htmlStr += `<br />`
    htmlStr += `<p>出生年月日:${newPerson.birthYear}年${newPerson.birthMonth}月${newPerson.birthDay}</p>`;
    htmlStr += `<p>身分證號:${newPerson.personalID}</p>`;
    htmlStr += `<br />`;
    htmlStr += `<p>通訊地址:${newPerson.address}</p>`;
    htmlStr += `<br />`
    htmlStr += `<p>通訊電話:${newPerson.phone}</p>`;
    htmlStr += `</div>`;

    return htmlStr;
}
function _listChattel(newPerson) {
    
}
function _listArr(arr, type) {
    let arrStr = '';
    for(i = 0; i < arr.length; i++) {
        arrStr += `<p>${i+1}.${type}:${arr[i].value}元</p>`;
        arrStr += `<br />`;
    }
    return arrStr;
}
module.exports = {
    list,
    create
};