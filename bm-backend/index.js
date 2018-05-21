var express = require('express');
var enrouten = require('express-enrouten');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(enrouten({
    directory: 'controllers'
}));

app.listen(3000, () => console.log('bm-backend listening on port 3000.'));