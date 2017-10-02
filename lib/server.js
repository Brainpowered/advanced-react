const express = require('express');
const config = require('./config');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {testVar: 'test'});
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}`);
});
