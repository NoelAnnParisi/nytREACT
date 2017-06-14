const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    snippet: {
        type: String,
        required: true
    },
    pub_date: {
        type: String,
        required: true
    },
    web_url: {
        type: String,
        // required: true
    }
});

module.exports = mongoose.model('article', ArticleSchema);

