const { Router } = require('express');

const ClassRoomRouter = Router();
const { ClassRoomService } = require('../services');
const { findClassRoom } = require('../middlewares');

const prefix = '/classroom';

ClassRoomRouter.post(prefix, ClassRoomService.create);

ClassRoomRouter.post(`${prefix}/search`, ClassRoomService.search);

ClassRoomRouter.get(`${prefix}/:id`, findClassRoom, ClassRoomService.get);

ClassRoomRouter.patch(`${prefix}/:id`, findClassRoom, ClassRoomService.update);

ClassRoomRouter.delete(`${prefix}/:id`, findClassRoom, ClassRoomService.remove);

ClassRoomRouter.post(`${prefix}/:id/remove-student`,
  findClassRoom, ClassRoomService.removeStudentToClassRoom);

module.exports = ClassRoomRouter;
