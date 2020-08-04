'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:dark red;">Java Home App - version-2019!!!!!</h1> \n');
});

app.listen(PORT, HOST);
console.log('listening at http://localhost:${port}');
