'use strict';

const mctools = require('./mctools.js');

exports.getServer = async function(req, res) {
    mctools.getServerData(req.params.ip, req.params.port, req.params.version).then(result => {
        res.send(result)
    })
};