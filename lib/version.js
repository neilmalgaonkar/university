'use strict';

const internals = {};

internals.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/version',
        config: {
            description: "Returns the version of the plugin",
            handler: function (request, reply) {

                return reply(internals.register.attributes.version);
            }
        }
    });
    next();
};

internals.register.attributes = {
    name: 'version',
    version: '1.0.0'
};

module.exports = internals;