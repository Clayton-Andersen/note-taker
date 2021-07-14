const { v4: uuidv4 } = require('uuid');

const path = require('path');
const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req, res) => {
    let database = fs.readFileSync('db/db.json')
    database = JSON.parse(database);
    res.json(database);
});

router.post('/notes', (req, res) => {
    let database = fs.readFileSync('db/db.json')
    database = JSON.parse(database);
    const tempObject = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    }
    database.push(tempObject)
    fs.writeFileSync('db/db.json', JSON.stringify(database))
    res.json(database);
})
module.exports = router;