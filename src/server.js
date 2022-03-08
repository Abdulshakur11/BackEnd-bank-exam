const express = require('express');
const app = express();
const cors = require('cors');
const { PORT } = require('./config');
const router = require('./modules');

require('events').EventEmitter.defaultMaxListeners = 1000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, console.log(PORT));