'use strict';

// Load modules

const Hapi = require('hapi');
const Hoek = require('hoek');
const Version = require('./version');


exports.init = function (port, next) {

    const server = new Hapi.Server();
    server.connection({ port: 8000 });
    server.register(Version, (err) => {

        Hoek.assert(!err, err);
        server.start((err) => {

            return next(err, server);
        });
    });
};
