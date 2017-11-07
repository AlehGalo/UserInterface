'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});


app.get('/grid', function(request, response){
    let numberOfItems = 5000;
    let array = [];

    for (let i = 0; i < numberOfItems; i++) {
        array[i] = [];
        for (let j = 0; j < 4; j++) {
            array[i][j] = i + "+=+" + j;
        }
    }
    response.send(JSON.stringify(array));
});

module.exports = app;