
async function getServerData(ip, port, version) {
    var mc = require('minecraft-protocol');
    var server = mc.ping({
      host: ip,
      port: parseInt(port),
      version: version
    });
    
    const data = await server;

    return data;
}

module.exports.getServerData = getServerData;