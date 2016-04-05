const express = require('express');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

var serverPort = 3000;
var app = express();
var ascii = fs.readFileSync('./ascii.txt', 'utf8');
var model = {
  message: `${chalk.yellow('express-basic') }: Server listening on ${chalk.cyan(serverPort)}`,
  ascii:  `ASCII by ${chalk.yellow('http://chris.com/ascii/')}`,
  tag: `Please visit ${chalk.yellow('http://www.coisadeprogramador.com.br')}`
};

app.use('/', express.static(path.resolve('./public/index.html')));
app.use(express.static(path.resolve('./public')));

app.listen(serverPort, () => {
  var output = ascii.replace('{{message}}', model.message);
  output = output.replace('{{ascii}}', model.ascii);
  output = output.replace('{{tag}}', model.tag);
  
  console.log(output);
});
