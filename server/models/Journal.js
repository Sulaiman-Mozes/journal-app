const mongoose = require('mongoose');

const { Schema } = mongoose;

const JournalSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('journals', JournalSchema);
