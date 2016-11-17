var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  _post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
  timestamps: true
});

mongoose.model('Comment', commentSchema);
