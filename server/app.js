'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require("mongoose"); // The reason for this demo.
const app = express();

const userSchema = require('./user');

const uriString = process.env.MONGODB_URI || "mongodb://root:password@ds245715.mlab.com:45715/databank";


// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '../client/build')));


// Answer API requests.
app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"' + (process.env.PORT || 9000) + '"}');
});

app.get('/grid', function (request, response) {
    userSchema.find({},  function (err, users) {
        if (err){
            console.error(err);
            return handleError(err);
        }
        console.log(users);
        response.send(JSON.stringify(users));
    });
});


// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

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


module.exports = app;