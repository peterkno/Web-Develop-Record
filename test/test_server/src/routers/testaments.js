const express = require('express');
const multer = require('multer');
// const bodyParser = require('body-parser');

// const testamentModel = require('../model/testaments.js');

const router = express.Router();
// router.use(bodyParser.json());

const testamentStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == 'img') {
            cb(null, './dist/picture')
        }
        else if (file.fieldname == 'pdf') {
            cb(null, './dist/testaments')
        }
    },
    filename: function (req, file, cb) {
        // console.log(req);
        // console.log(Object.values(req.body)[0]);
        // console.log(file);
        const filename = Object.values(req.body)[0] + String(".pdf")
        cb(null, filename);
    }
});

const testamentUpload = multer({ storage: testamentStorage });
const field = [{name: 'img', maxCont: 1}, {name: 'pdf', maxCont: 1}, {name: 'id', maxCont: 1}]

router.post('/TestamentUpload', testamentUpload.fields(field), function(req, res, next) {
    // console.log('req.files', req.files);
    console.log("TestamentUpload: "+Object.values(req.files));
    // res.end();
    res.end(Object.values(req.files)[0][0].filename);
});

module.exports = router;