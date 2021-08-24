const Student = require('../models');
const { CustomErrors } = require('../../utils');
const { DEFAULT_PROJECTIONS } = require('../constanst');

const findStudent = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const student = await Student.findOne({ _id: id }, DEFAULT_PROJECTIONS);
    if (!student) {
      return new Error(CustomErrors.NOT_FOUND_ERROR.MESSAGE);
    }
    req.entity = student;
    return next();
  } catch (e) {
    return next(new Error(e));
  }
};

module.exports = {
  findStudent,
};
