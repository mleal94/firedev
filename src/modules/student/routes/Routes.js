const { Router } = require('express');

const StudentRouter = Router();
const { StudentService } = require('../services');
const { findStudent } = require('../middlewares');

const prefix = '/students';

StudentRouter.post(prefix, StudentService.create);
StudentRouter.post(`${prefix}/search`, StudentService.search);
StudentRouter.get(`${prefix}/:id`, findStudent, StudentService.get);
StudentRouter.patch(`${prefix}/:id`, findStudent, StudentService.update);
StudentRouter.delete(`${prefix}/:id`, findStudent, StudentService.remove);

module.exports = StudentRouter;
