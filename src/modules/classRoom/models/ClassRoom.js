const { Schema, model } = require('mongoose');
const { Regex: { NAME } } = require('../../utils');

const ClassRoom = new Schema({
  name: {
    type: String,
    required: true,
    match: NAME,
    unique: true,
  },
  mainProfessor: {
    type: Schema.Types.ObjectId,
  },
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'Student',
  }],
});

ClassRoom.index({ name: 'text' });

module.exports = model('ClassRoom', ClassRoom);
