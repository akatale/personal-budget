const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

var fetch = require('./server.json');

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    // res.json(budget);
    res.json(fetch);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}', port);
});