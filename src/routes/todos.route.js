/* eslint-disable import/extensions */
import express from 'express';
import * as todoController from '../controllers/todos.controller.js';
import * as todoValidator from '../validators/todos.validator.js';
import * as todoSerializer from '../serializers/todos.serializer.js';
import { successResponse } from '../helpers/common-function.helper.js';

const router = express.Router();

router.post(
  '/',
  todoValidator.createTodo,
  todoController.createTodo,
  successResponse,
);
router.get(
  '/',
  todoController.getAllTodo,
  todoSerializer.getAllTodo,
  successResponse,
);

export { router };
