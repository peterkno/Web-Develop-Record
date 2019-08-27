const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const heritageModel = require('../model/heritages.js');

const router = express.Router();

router.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ' rocketpenteam@gmail.com',
        pass: 'c19980831'
    }

    // host: 'mail.nicenter.org.tw', // Server
    // port: 25,
    // auth: {
    //     user: 'log@nicenter.org.tw',
    //     pass: 'qaz123wsx456',
    // },
});

// search
router.get('/mails', function(req, res, next) {
    const personalID = req.query.searchText;
    console.log("personalID: " + personalID);
    // const personalID = "ABCD";
    heritageModel.list(personalID).then(heritages => {
        console.log("Router: " + heritages);
        res.json(heritages);
    }).catch(next);
});

router.post('/mails', function(req, res, next) {
    const {personalID} = req.body;
    // const {personalID} = "ABCD";

    fs.readFile('data-heritages.json', 'utf8', (err,data) => {
        if (err) reject(err);

        let heritages = data ? JSON.parse(data) : [];

        heritages = heritages.filter(p => {
            return p && p.personalID === personalID;
        });
        console.log("Mail Post Person: " + heritages[0].personalID);
        const reciver = String("peter55180831");
        const options = {
            //寄件者
            from: 'rocketpenteam@gmail.com',
            // from: 'rocketpenteam@nicenter.org.tw',
            //收件者
            to: `${reciver}@gmail.com`, 
            //副本
            cc: '',
            //密件副本
            bcc: '',
            //主旨
            subject: '這是 node.js 發送的測試信件', // Subject line
            //純文字
            text: `${heritages[0].heritage}`, // plaintext body
            //嵌入 html 的內文
            html: '' ,
            //附件檔案
            attachments: [ {
                filename: 'text01.txt',
                content: '' 
            }, {
                filename: 'test.pdf',
                path: './dist/testament/N123.pdf'
            }]
        }
        
        transporter.sendMail(options, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log('訊息發送: ' + info.response);
            }
        });
    })

});

module.exports = router;

	