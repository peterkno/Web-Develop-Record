const express = require('express');
const bodyParser = require('body-parser');

const testamentModel = require('../model/testaments.js');

const router = express.Router();

router.use(bodyParser.json());

// List
router.get('/testaments', function(req, res, next) {
    // testamentModel.list()
})