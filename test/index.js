'use strict';

// Load Version module
const University = require('./../lib/index');

// Load code assertion module
const Code = require('code');

// Load lab test runner module
const Lab = require('lab');

// Get the instance of test suite
const lab = exports.lab = Lab.script();

lab.test('Ensure server exists!', (done) => {

    University.init(8000, (err, server) =>  {

        Code.expect(err).to.not.exists();
        Code.expect(server).to.exists();
        server.stop(done);
    });
});
