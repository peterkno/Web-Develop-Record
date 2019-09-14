const express = require('express');
const bodyParser = require('body-parser');

const personModel = require('../model/persons.js');

const router = express.Router();

router.use(bodyParser.json());

// List 
router.get('/persons', function(req, res, next) {
    personModel.list(req.query.searchText).then(persons => {
        // console.log("Person Router: " + persons);
        res.json(persons);
    }).catch(next);
});

// Create
router.post('/persons', function(req, res, next) {
    const {newPerson} = req.body;
    // console.log("ID: " + personalID);
    // console.log("Heritage: " + heritage);
    // if (!heritage ) {
    //     const err = new Error('heritage is required');
    //     throw err;
    // } else if (!personalID) {
    //     const err = new Error('personalID is required');
    //     throw err;
    // }
    personModel.create(newPerson).then(persons => {
        res.json(persons);
    }).catch(next);
});

module.exports = router;