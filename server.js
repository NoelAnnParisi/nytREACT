const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const express = require('express')
const app = express();
const apiRouter = require('./server/article.routes');

mongoose.connect('mongodb://localhost:/scraping');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use('/api', apiRouter);

app.listen(8080, (err)=> {
	if (!err){
		console.log(`YAHS QWEEN!`);
	}
})