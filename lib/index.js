'use strict';

// Load modules

const Hapi = require('hapi');
const Hoek = require('hoek');
const Package = require('../package.json');
const Version = require('./version.js');


// Declare internals

const internals = {
    response: {
        version: Package.version
    }
};

internals.init = function () {

    const server = new Hapi.Server();
    server.connection({ port: process.env.PORT || 8000 });

    // Register the plugin

    server.register(Version, (err) => {
        
        Hoek.assert(!err, err);
        server.start((err) => {

            Hoek.assert(!err, err);
            console.log('Server started at: ' + server.info.uri);
        });
    });
};

internals.init();