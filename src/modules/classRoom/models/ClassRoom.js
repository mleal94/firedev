const { Schema, model } = require('mongoose');
const { Regex: { NAME } } = require('../../core/utils');

const ClassRoom = new Schema({
  name: {
    type: String,
    required: true,
    match: NAME,
    unique: true,
  },
  mainProfessor: {
    type: String,
    required: true,
  },
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'Student',
  }],
});

ClassRoom.index({ name: 'text' });

module.exports = model('ClassRoom', ClassRoom);
