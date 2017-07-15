'use strict';

const Hoek = require('hoek');
const Server = require('./index.js');

Server.init(8000, (err, server) => {

    Hoek.assert(!err, err);
    console.log('Server has started!');
});
