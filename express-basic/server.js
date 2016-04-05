const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');
const chalk = require('chalk');

var serverPort = 3000;
var app = express();
var homerAscii = fs.readFileSync('./homer_ascii.txt', 'utf8');
var model = {
  message: `${chalk.yellow('express-basic') }: Server listening on ${chalk.cyan(serverPort)}`,
  ascii:  `ASCII by ${chalk.yellow('http://chris.com/ascii/')}`,
  tag: `Please visit ${chalk.yellow('http://www.coisadeprogramador.com.br')}`
};

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(serverPort, () => {
  var output = homerAscii.replace('{{message}}', model.message);
  output = output.replace('{{ascii}}', model.ascii);
  output = output.replace('{{tag}}', model.tag);
  
  console.log(output);
});
