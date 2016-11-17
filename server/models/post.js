var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: [3, 'You really think you can post a good answer in less than 3 chars??'],
    required: [true, 'Answer is required to post!']
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _topic: {
    type: Schema.Types.ObjectId,
    ref: 'Topic'
  },
  upvotes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  downvotes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {
  timestamps: true
})

mongoose.model('Post', postSchema);
