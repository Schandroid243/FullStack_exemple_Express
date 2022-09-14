'use strict';

const express = require('express');
const route2 = express.Router();

const connection = require('../db');

route2.post('/update', (req, res, next) => {
    connection.execute("UPDATE persons SET name=?, surName=? WHERE id=?;", [req.body.name, req.body.surName, req.body.id]).then(() => {
        console.log('ok');
    }).catch((err) => {
        console.log(err);
    });
    res.end();
});

route2.post('/delete', (req, res, next) => {
    connection.execute("DELETE FROM persons WHERE id=?;", [req.body.id]).then(() => {
        console.log('ok');
    }).catch((err) => {
        console.log(err);
    });
    res.end();
})

module.exports = route2;