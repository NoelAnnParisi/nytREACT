const Article = require('./article.model');
const promisify = require('es6-promisify');

exports.get = async (req, res) => {
  Article.find({}, (err, data) => {
    if (err) {
      console.log(`${err}`);
      res.status(500).json(err);
    }
    res.status(200).json(data)
  })
}

exports.post = async (req, res) => {
  console.log(req.body)
  Article.create(req.body, (err, data) => {
    if (err) {
      console.log(`${err}`);
      res.status(500).json(err);
    }
    res.status(200).json(data)
  })
}