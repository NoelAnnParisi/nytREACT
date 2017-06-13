const router = require('express').Router();
const {
  get,
  post
} = require('./article.controller');

module.exports = router
  .get('/', get)
  .post('/', post)