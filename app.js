var createError = require('http-errors');
var express = require('express');



var app = express();

app.get('/', (req, res) =>{
  res.sendFile('views/index.html', {root: __dirname});
})

/*
Página integrantes
 */

data = {'integrantes':[
    {"nome": "Ricardo Padilha de Assis"},
    {"nome": "Victor Ramon Balchaki"}
  ]};

app.get('/integrantes', (req, res) =>{
  res.json(data);
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
