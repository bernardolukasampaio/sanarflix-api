const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('App is working'));

app.use('/api', routes);

app.listen(80, () => console.log('port 80!'));

module.exports = {
    app
};
