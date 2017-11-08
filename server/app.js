'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const mongoose = require("mongoose"); // The reason for this demo.
const uriString = process.env.MONGODB_URI || "mongodb://root:password@ds245715.mlab.com:45715/databank";

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uriString, {
    useMongoClient: true,
    /* other options */
}, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uriString + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uriString);
    }
});

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String
});


// Answer API requests.
app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"' + (process.env.PORT || 9000) + '"}');
});

app.get('/grid', function (request, response) {
    let userModel = mongoose.model('userModel', userSchema);

    userModel.find({}, function (err, users) {
        if (err){
            console.error(err);
            return handleError(err);
        }
        console.log(users);
        response.send(JSON.stringify(users));
    });
    //
    // let numberOfItems = 5000;
    // let array = [];
    //
    // for (let i = 0; i < numberOfItems; i++) {
    //     array[i] = [];
    //     for (let j = 0; j < 4; j++) {
    //         array[i][j] = i + "+=+" + j;
    //     }
    // }
    // response.send(JSON.stringify(array));
});


// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app;