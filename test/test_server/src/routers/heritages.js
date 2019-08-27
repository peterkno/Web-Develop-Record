const express = require('express');
const bodyParser = require('body-parser');

const heritageModel = require('../model/heritages.js');

const router = express.Router();

router.use(bodyParser.json());

// List 
router.get('/heritages', function(req, res, next) {
    heritageModel.list(req.query.searchText).then(heritages => {
        res.json(heritages);
    }).catch(next);
});

// Create
router.post('/heritages', function(req, res, next) {
    const {personalID, heritage} = req.body;
    console.log("ID: " + personalID);
    console.log("Heritage: " + heritage);
    if (!heritage ) {
        const err = new Error('heritage is required');
        throw err;
    } else if (!personalID) {
        const err = new Error('personalID is required');
        throw err;
    }
    heritageModel.create(personalID, heritage).then(heritage => {
        res.json(heritage);
    }).catch(next);
});

module.exports = router;