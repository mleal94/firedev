const { Schema, model } = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const { Regex: { NAME } } = require('../../core/utils');
const { GENDER_ENUM } = require('../constanst');

const Student = new Schema({
  name: {
    type: String,
    required: true,
    match: NAME,
  },
  gender: {
    type: String,
    required: true,
    enum: Object.values(GENDER_ENUM),
  },
  age: {
    type: Number,
    // eslint-disable-next-line radix
    set: (v) => parseInt(v),
    validate: {
      validator: (v) => v >= 0,
      message: () => 'The age must be a number greater than zero',
    },
    required: true,
  },
  email: {
    type: String,
    validate: {
      validator(value) {
        if (value !== null) return isEmail(value);
        return true;
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
    required: true,
    unique: true,
  },
  birthdate: {
    type: Date,
  },
  bornCity: {
    type: String,
  },
  classRoom: {
    type: Schema.Types.ObjectId,
    ref: 'ClassRoom',
  },
});

Student.index({ name: 'text' });

module.exports = model('Student', Student);
