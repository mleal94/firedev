const { CustomErrors, Regex: { NUMBER, ID } } = require('../../core/utils');
const { DEFAULT_PROJECTIONS } = require('../constanst');
const Student = require('../models');
const ClassRoom = require('../../classRoom/models');

class StudentService {
  async create(req, res) {
    try {
      const { body } = req;
      if (!body.name) {
        return res.status(400).json({ message: CustomErrors.MISSING_NAME_ERROR.MESSAGE });
      }
      if (!body.email) {
        return res.status(400).json({ message: CustomErrors.MISSING_EMAIL_ERROR.MESSAGE });
      }
      if (!body.classRoom) {
        return res.status(400).json({ message: CustomErrors.MISSING_CLASSROOM_ERROR.MESSAGE });
      }
      if (body.classRoom && !ID.test(body.classRoom)) {
        return res.status(400).json({ message: CustomErrors.NOT_VALID_ID_ERROR.MESSAGE });
      }
      if (!body.age) {
        return res.status(400).json({ message: CustomErrors.MISSING_AGE_ERROR.MESSAGE });
      }
      if (body.age && !NUMBER.test(body.age)) {
        return res.status(400).json({ message: CustomErrors.NOT_VALID_TYPE_AGE_ERROR.MESSAGE });
      }
      if (body.age > 120) {
        return res.status(400).json({ message: CustomErrors.NOT_VALID_AGE_ERROR.MESSAGE });
      }
      body.age = +body.age;
      const exist = await Student.findOne({ email: body.email });
      if (exist) {
        return res.status(400).json({ message: CustomErrors.EXIST_EMAIL_ERROR.MESSAGE });
      }
      const newStudent = await Student.create(body);
      if (!newStudent) {
        return res.status(400).json({ message: CustomErrors.EXIST_EMAIL_ERROR.MESSAGE });
      }
      const filter = {
        _id: body.classRoom,
      };
      const update = {
        $push: {
          students: newStudent._id,
        },
      };
      await ClassRoom.updateOne(filter, update);
      const student = await Student.findOne({ _id: newStudent._id }, DEFAULT_PROJECTIONS).lean();
      return res.status(201).json(student);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async update(req, res) {
    try {
      const { entity, body: updatedData } = req;
      // ignoring internal fields
      delete updatedData._id;
      entity.set(updatedData);
      const updated = await entity.save();
      return res.status(200).json(updated);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async remove(req, res) {
    try {
      const { entity } = req;
      const removed = await entity.remove();
      const filter = {
        students: {
          $elemMatch: {
            $eq: entity._id,
          },
        },
      };
      const update = {
        $pull: {
          students: {
            $in: entity._id,
          },
        },
      };
      await ClassRoom.updateOne(filter, update);
      return res.status(200).json(removed);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  get(req, res) {
    try {
      const { entity } = req;
      return res.status(200).json(entity);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async search(req, res) {
    try {
      const { body: { search }, body } = req;
      let query = {};
      if (body.search) {
        query = {
          $text: {
            $search: search,
            $caseSensitive: false,
            $diacriticSensitive: false,
          },
        };
      }
      const result = await Student.find(query, DEFAULT_PROJECTIONS);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

// Singleton Instance
module.exports = new StudentService();
