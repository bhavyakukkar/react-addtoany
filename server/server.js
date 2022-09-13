const express = require('express');
const cors = require('cors');
const path = require('path');

const server = express();

server.use(cors());
server.use(express.static(path.join(__dirname, 'public')));

server.listen(8000);