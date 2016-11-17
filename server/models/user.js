var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'name is required'],
    maxlength: [20, 'name cannot be longer than 20 chars'],
    minlength: [3, 'name must be 3 or more characters'],
    validate: [{
      validator: function(name) {
        // email regex
        return /^\w+$/.test(name);
      },
      message: '{VALUE} is not a valid name'
    }]
  },
  topics: [{
    type: Schema.Types.ObjectId,
    ref: 'Topic'
  }],
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {
  timestamps: true
})

mongoose.model('User', userSchema);
