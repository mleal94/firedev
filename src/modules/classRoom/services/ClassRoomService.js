const { find } = require('lodash');
const { CustomErrors, Regex: { ID } } = require('../../utils');
const ClassRoom = require('../models');
const { DEFAULT_PROJECTIONS } = require('../constanst');

class ClassRoomService {
  async create(req, res) {
    try {
      const { body } = req;
      if (!body.name) {
        return res.status(400).json({ message: CustomErrors.MISSING_NAME_CLASSROOM_ERROR.MESSAGE });
      }
      const exist = await ClassRoom.findOne({ name: body.name });
      if (exist) {
        return res.status(400).json({ message: CustomErrors.EXIST_CLASSROOM_NAME_ERROR.MESSAGE });
      }
      if (body.students) {
        // eslint-disable-next-line consistent-return
        body.students.forEach((student) => {
          if (!ID.test(student)) {
            // eslint-disable-next-line max-len
            throw new Error(`El id:${student} ${CustomErrors.NOT_VALID_ID_VALIDATION.MESSAGE}`);
          }
        });
      }
      const { _id } = await ClassRoom.create(body);
      const group = await ClassRoom.findOne({ _id }, DEFAULT_PROJECTIONS).lean();
      return res.status(201).json(group);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async update(req, res) {
    try {
      const { entity, body: updatedData } = req;
      // ignoring internal fields
      delete updatedData._id;
      delete updatedData.students;
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
      const result = await ClassRoom.find(query, DEFAULT_PROJECTIONS);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async addStudentToClassRoom(req, res) {
    try {
      const { entity, body: { student } } = req;
      if (student && !ID.test(student)) {
        return res.status(400).json({ message: CustomErrors.NOT_VALID_ID_ERROR.MESSAGE });
      }
      entity.students.push(student);
      const updated = await entity.save();
      return res.status(200).json(updated);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async removeStudentToClassRoom(req, res) {
    try {
      const { entity, body: { student } } = req;
      if (student && !ID.test(student)) {
        return res.status(400).json({ message: CustomErrors.NOT_VALID_ID_ERROR.MESSAGE });
      }
      const { students } = entity;
      const exist = find(students, (studentDb) => studentDb.toString() === student);
      if (!exist) {
        return res.status(404)
          .json({ message: CustomErrors.NOT_FOUND_STUDENT_CLASSROOM_ERROR.MESSAGE });
      }
      const studentsUpdated = students.filter((studentDb) => studentDb.toString() !== student);
      entity.students = [...studentsUpdated];
      const updated = await entity.save();
      return res.status(200).json(updated);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

// Singleton Instance
module.exports = new ClassRoomService();
