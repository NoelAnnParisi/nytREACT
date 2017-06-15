const Article = require('./article.model');
const promisify = require('es6-promisify');

exports.get = (req, res) => {
  Article.find({}, (err, data) => {
    if (err) {
      console.log(`${err}`);
      res.status(500).json(err);
    }
    res.status(200).json(data)
  })
}

exports.getAndDelete = (req, res) => {
  Article.findByIdAndRemove(req.params.id, (err, doc) => {
     if (err) {
      console.log(`${err}`);
      res.status(500).json(err.message);
    }
    res.status(200).json(doc)
  })
}

exports.post = (req, res) => {
  console.log(req.body)
  Article.create(req.body.data, (err, data) => {
    if (err) {
      console.log(`${err}`);
      res.status(500).json(err);
    }
    res.status(200).json(data)
  })
}