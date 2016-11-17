var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topicSchema = new mongoose.Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  title: {
    type: String,
    unique: [true, 'title must be unique. No reposts!'],
    required: [true, 'Topic requires a title']
  },
  description: {
    type: String
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, {
  timestamps: true
})

mongoose.model('Topic', topicSchema);
