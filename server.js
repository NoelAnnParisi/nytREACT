const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const apiRouter = require('./server/article.routes');
// for development
// mongoose.connect('mongodb://localhost:/nytreact');
// for production
mongoose.connect('mongodb://heroku_vk85hjfn:th89vdbmg6tm0ikn6unq7d34o0@ds129422.mlab.com:29422/heroku_vk85hjfn');
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(PORT, (err)=> {
	if (!err){
		console.log(`YAHS QWEEN!`);
	}
})