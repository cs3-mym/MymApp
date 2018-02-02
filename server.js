const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

const server = express();
server.use(bodyParser.json());

const {
  FRONT_END_SERVER
} = require('./variables/connections.js');

var whitelist = [FRONT_END_SERVER];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}

server.use(cors(corsOptions));
routes(server);

module.exports = server;
