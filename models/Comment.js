const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: null,

  },
  description: {
    type: String,
    required: true,
    default: null,

  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: null,

  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: null,

  }
});

// STATIC METHODS
CommentSchema.statics.getAllComments = function () {
  return;
}

// OBJECT METHODS
CommentSchema.methods.getTitle = function () {
  return this.title;
}

CommentSchema.methods.getDescription = function () {
  return this.description;
}

CommentSchema.methods.getFrom = function () {
  return this.from;
}

CommentSchema.methods.getProject = function () {
  return this.project;
}

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
