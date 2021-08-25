const ClassRoom = require('../models');
const { DEFAULT_PROJECTIONS } = require('../constanst');
const { CustomErrors } = require('../../core/utils');

const findClassRoom = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const classRoom = await ClassRoom.findOne({ _id: id }, DEFAULT_PROJECTIONS)
      .populate({ path: 'students', select: ['name', 'email', 'age', 'gender'] });
    if (!classRoom) {
      return res.status(404).json({ message: CustomErrors.NOT_FOUND_CLASSROOM_ERROR.MESSAGE });
    }
    req.entity = classRoom;
    return next();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  findClassRoom,
};
