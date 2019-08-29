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
        console.log("Mail Router: " + persons);
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
        console.log("Mail Post Person: " + persons[0].personalID);
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
            subject: '這是 node.js 發送的測試信件', // Subject line
            //純文字
            text: `${persons[0].heritage}`, // plaintext body
            //嵌入 html 的內文
            html: '' ,
            //附件檔案
            attachments: [{
                filename: `person_${persons[0].personalID}.pdf`,
                path: `./dist/persons/${persons[0].personalID}.pdf`
            }, {
                filename: `testament_${persons[0].personalID}.pdf`,
                path: `./dist/testaments/${persons[0].personalID}.pdf`
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

	