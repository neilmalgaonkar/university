'use strict';

const University = require('../lib/index');
const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

lab.test('Ensures version api is running', (done) => {

    University.init(8000, (err, server) => {

        Code.expect(err).to.not.exists();
        const routeOptions = {
            method: 'GET',
            url: '/version'
        };

        server.inject(routeOptions, (response) => {

            Code.expect(response.statusCode).to.equal(200);
            server.stop(done);
        });
    });
});


lab.test('Ensure version api is returning valid version', (done) => {

    University.init(8000, (err, server) => {

        Code.expect(err).to.not.exists();
        const routeOptions = {
            method: 'GET',
            url: '/version'
        };
        server.inject(routeOptions, (response)  => {

            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response.result.version).to.equal('0.0.2');
            server.stop(done);
        });
    });
});
