var Express = require('express')
var app = Express();
var bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var thoughts = ['my thought','your thought','nada']

app.delete('/thoughts/:id', function(req, res) {
  var index = req.params.id
  thoughts.splice(index, 1)
  res.json(thoughts)
})
app.put('/thoughts/:id', function(req, res) {
  var index = thoughts[req.params.id];
  thoughts[index] = req.body.message;
  res.json(thoughts[index]);
})

app.use('/thoughts/:id', function(req, res) {
  var item = thoughts[req.params.id]
  res.json(item)
})


app.post('/thoughts', function(req, res) {
  thoughts.push(req.body.message);
  res.json(req.body.message)
})

app.use('/thoughts', function(req, res) {
  res.json(thoughts)
})


app.listen(1337, function(req, res) {
  console.log('listening on 1337')
})

module.exports = app;
