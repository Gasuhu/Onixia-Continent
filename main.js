
var fs = require('fs');
const express = require('express');

const hostname = '127.0.0.1';
const port = 3001;
server = express();
server.use(express.static('public'))

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});