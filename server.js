var express = require('express');
var index = require('./routes/index');
var books = require('./routes/books');
var app = express();

app.use(express.static('public'));
app.use('/', index);
app.use('/books', books);

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Server listening on port', server.address().port);
});
