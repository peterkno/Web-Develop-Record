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
            // console.log("Person Model: " + persons);
            resolve(persons);
        })
    })
}

function create(newPerson) {
    return new Promise((resolve, reject) => {
        // console.log("Perpare Create Peronal Info");
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

        let htmlStr = _listPersonalInfo(newPerson) + _listChattel(newPerson) + _listRealEstate(newPerson) 
                    + _listCreditor(newPerson) + _listDebtor(newPerson) + _listWarrant(newPerson) + _listPositionAndRemark(newPerson);
        var html = htmlToPdfMake(htmlStr, window);
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
    htmlStr += `<p>中文姓名 : ${newPerson.chineseName} 英文姓名 : ${newPerson.chineseName}</p>`;
    // htmlStr += `<br />`
    htmlStr += `<p>出生年月日 : ${newPerson.birthYear} 年 ${newPerson.birthMonth} 月 ${newPerson.birthDay} 日</p>`;
    htmlStr += `<p>身分證號 : ${newPerson.personalID}</p>`;
    // htmlStr += `<br />`;
    htmlStr += `<p>通訊地址 : ${newPerson.address}</p>`;
    // htmlStr += `<br />`
    htmlStr += `<p>通訊電話 : ${newPerson.phone}</p>`;
    htmlStr += `</div>`;

    return htmlStr;
}
function _listChattel(newPerson) {
    let htmlStr = '';
    htmlStr += `<div>`;
    htmlStr += `<h3>一、動產部分</h3>`;
    htmlStr += _listCarArr(newPerson.carArr);
    htmlStr += _listMotorArr(newPerson.motorArr);
    htmlStr += _listMoney(newPerson.money);
    htmlStr += _listAcount(newPerson.accountArr);
    htmlStr += _listStock(newPerson.stockArr);
    htmlStr += _listInsurance(newPerson.insuranceArr);
    htmlStr += `</div>`;

    return htmlStr;
}
function _listRealEstate(newPerson) {
    let htmlStr = '';
    htmlStr += `<div>`;
    htmlStr += `<h3>二、不動產部分</h3>`;
    htmlStr += _listLand(newPerson.landArr);
    htmlStr += _listBuilding(newPerson.buildingArr);
    htmlStr += `</div>`;

    return htmlStr;
}
function _listCreditor(newPerson) {
    let htmlStr = '';
    htmlStr += `<div>`;
    htmlStr += `<h3>三、債權人(您的債主)之姓名、地址及債權數額</h3>`;
    htmlStr += `<h5>債權人 : 共${newPerson.creditorArr.length}位</h5>`
    for(i = 0; i < newPerson.creditorArr.length; i++) {
        htmlStr += `<p>${i+1}.姓名 : ${newPerson.creditorArr[i].name} 
                    債權數額 : ${newPerson.creditorArr[i].value}元 
                    地址 : ${newPerson.creditorArr[i].addr}</p>`;
    }
    htmlStr += `</div>`;

    return htmlStr;
}
function _listDebtor(newPerson) {
    let htmlStr = '';
    htmlStr += `<div>`;
    htmlStr += `<h3>四、債務人(誰欠您錢)之姓名、地址及債權數額</h3>`;
    htmlStr += `<h5>債務人 : 共${newPerson.debtorArr.length}位</h5>`
    for(i = 0; i < newPerson.debtorArr.length; i++) {
        htmlStr += `<p>${i+1}.姓名 : ${newPerson.debtorArr[i].name} 
                    債權數額 : ${newPerson.debtorArr[i].value}元 
                    地址 : ${newPerson.debtorArr[i].addr}</p>`;
    }
    htmlStr += `</div>`;

    return htmlStr;
}
function _listWarrant(newPerson) {
    let htmlStr = '';
    htmlStr += `<div>`;
    htmlStr += `<h3>五、作保人</h3>`;
    htmlStr += `<h5>作保人 : 共${newPerson.warrantArr.length}位</h5>`
    for(i = 0; i < newPerson.warrantArr.length; i++) {
        htmlStr += `<p>${i+1}.本人替 ${newPerson.warrantArr[i].name} 
                    做保證人，擔保 ${newPerson.warrantArr[i].value}元債務
                    </p>`;
    }
    htmlStr += `</div>`;

    return htmlStr;
}
function _listPositionAndRemark(newPerson) {
    let htmlStr = '';
    htmlStr += `<div>`;
    htmlStr += `<h3>六、請輸入您的印鑑、帳本、遺囑正本的存放位置</h3>`
    htmlStr += `<p>位置</p><p>${newPerson.position}</p>`
    htmlStr += `<p>備註</p><p>${newPerson.remark}</p>`
    htmlStr += `</div>`;

    return htmlStr;
}


function _listCarArr(carArr) {
    let arrStr = '';
    arrStr += `<h5>汽車 : 共${carArr.length}輛</h5>`
    for(i = 0; i < carArr.length; i++) {
        arrStr += `<p>${i+1}.牌照號碼 : ${carArr[i].licensePlate} 市值 : ${carArr[i].value}元</p>`;
    }
    return arrStr;
}
function _listMotorArr(motorArr) {
    let arrStr = '';
    arrStr += `<h5>機車 : 共${motorArr.length}輛</h5>`;
    for(i = 0; i < motorArr.length; i++) {
        arrStr += `<p>${i+1}.牌照號碼 : ${motorArr[i].licensePlate} 市值 : ${motorArr[i].value}元</p>`;
    }
    return arrStr;
}
function _listMoney(money) {
    let arrStr = '';
    arrStr += `<h5>現金 : 共${money}元</h5>`;
    return arrStr;
}
function _listAcount(accountArr) {
    let arrStr = '';
    arrStr += `<h5>銀行帳戶 : 共${accountArr.length}個</h5>`;
    for(i = 0; i < accountArr.length; i++) {
        arrStr += `<p>${i+1}.存款種類 : ${accountArr[i].type} 存款帳號 : ${accountArr[i].ID} 存款金額 : ${accountArr[i].value}元</p>`;
    }
    return arrStr;
}
function _listStock(stockArr) {
    let arrStr = '';
    arrStr += `<h5>股票 : 共${stockArr.length}種</h5>`;
    for(i = 0; i < stockArr.length; i++) {
        arrStr += `<p>${i+1}.股號/股名 : ${stockArr[i].type} 股數 : ${stockArr[i].amount} 每股金額 : ${stockArr[i].value}元</p>`;
    }
    return arrStr;
}
function _listInsurance(insuranceArr) {
    let arrStr = '';
    arrStr += `<h5>保險 : 共${insuranceArr.length}支</h5>`;
    for(i = 0; i < insuranceArr.length; i++) {
        arrStr += `<p>${i+1}.保險公司 : ${insuranceArr[i].company} 保單種類 : ${insuranceArr[i].type} 
                    保險金額 : ${insuranceArr[i].value}元 保單生效日期 ${insuranceArr[i].date} </p>`;
    }
    return arrStr;
}
function _listLand(landArr) {
    let arrStr = '';
    arrStr += `<h5>土地 : 共${landArr.length}筆</h5>`;
    for(i = 0; i < landArr.length; i++) {
        arrStr += `<p>${i+1}.地號 : ${landArr[i].number} 市值(成交價) : ${landArr[i].finalValue} 元</p>`;
    }
    return arrStr;
}
function _listBuilding(buildingArr) {
    let arrStr = '';
    arrStr += `<h5>建物 : 共${buildingArr.length}筆</h5>`;
    for(i = 0; i < buildingArr.length; i++) {
        arrStr += `<p>${i+1}.門牌號碼 : ${buildingArr[i].number} 市值(成交價) : ${buildingArr[i].finalValue}元</p>`;
    }
    return arrStr;
}
module.exports = {
    list,
    create
};