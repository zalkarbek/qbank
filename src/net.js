const net = require('net');

// Create a server object
const netSocketServer = net.createServer((socket) => {
    socket.on('data', (data) => {
        const buff = Buffer.from(data, 'base64');
        const base64 = buff.toString('utf8');
        // const string = Buffer.from(base64, 'base64');
        // const parsed = JSON.parse(string);
        console.log(base64);
    });
    // socket.write('SERVER: Hello! This is server speaking.<br>');
    // socket.end('SERVER: Closing connection now.<br>');
  }).on('error', (err) => {
    console.error(err);
  });
  

// Open server on port 3003
netSocketServer.listen(3002, () => {
    console.log('socket server opened on:', netSocketServer.address().port);
});

netSocketServer.on('error', (e) => {
    console.log(e)
});