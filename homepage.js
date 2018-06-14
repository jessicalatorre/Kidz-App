//route for homempage
//route for parent mode

express = require('express'),

app = express();

app.get('/', function(res, res) {
    res.send('Welcome to the KidzApp Page!');
});