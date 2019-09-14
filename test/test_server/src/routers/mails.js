const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const personModel = require('../model/persons.js');

const router = express.Router();

router.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rocketpenteam@gmail.com',
        pass: 'c19980831'
    }

});

// search
router.get('/mails', function(req, res, next) {
    const personalID = req.query.searchText;
    // console.log("personalID: " + personalID);
    // const personalID = "ABCD";
    personModel.list(personalID).then(persons => {
        // console.log("Mail Router: " + persons);
        res.json(persons);
    }).catch(next);
});

router.post('/mails', function(req, res, next) {
    const {searchID} = req.body;
    // const {personalID} = "ABCD";

    fs.readFile('data-persons.json', 'utf8', (err,data) => {
        if (err) reject(err);

        let persons = data ? JSON.parse(data) : [];

        persons = persons.filter(p => {
            return p && p.personalID === searchID;
        });
        // console.log("Mail Post Person: " + persons[0].personalID);
        // const reciver = String("peter55180831");
        const options = {
            //寄件者
            from: 'rocketpenteam@gmail.com',
            // from: 'rocketpenteam@nicenter.org.tw',
            //收件者
            to: `${persons[0].emailArr[0].addr}`, 
            //副本
            cc: '',
            //密件副本
            bcc: '',
            //主旨
            subject: '遺囑管家', // Subject line
            //純文字
            text: `您好，附檔為${persons[0].chineseName}生前透過遺囑管家系統留下的遺囑副本、財務資訊及其他提醒事項，敬請查收。
            祝 事事順心`, // plaintext body
            //嵌入 html 的內文
            html: '' ,
            //附件檔案
            attachments: [{
                filename: `${persons[0].personalID}財產清單.pdf`,
                path: `./dist/persons/${persons[0].personalID}.pdf`
            }, {
                filename: `${persons[0].personalID}遺囑.pdf`,
                path: `./dist/testaments/${persons[0].personalID}.pdf`
            }, {
                filename: `貼心小提醒.pdf`,
                path: `./dist/mails/remind.pdf`
            }]
        }
        
        transporter.sendMail(options, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log('訊息發送: ' + info.response);
            }
        });

        setTimeout(() => {}, 3000);
    })

});

module.exports = router;

	