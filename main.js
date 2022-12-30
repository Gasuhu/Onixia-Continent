const express = require('express');


const port = process.env.PORT || 3001;
server = express();
server.use(express.static('public'))

server.listen(port, () => {
  console.log(`Server running `);
});