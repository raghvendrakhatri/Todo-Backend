/* eslint-disable import/extensions */
import { commonErrorHandler } from '../helpers/common-function.helper.js';
import * as todoService from '../services/todos.service.js';

const createTodo = async (req, res, next) => {
  try {
    const { body: payload } = req;
    await todoService.createTodo(payload);
    next();
  } catch (err) {
    commonErrorHandler(req, res, err.message, 400, err);
  }
};

const getAllTodo = async (req, res, next) => {
  try {
    const data = await todoService.getAllTodo();
    req.data = data;
    next();
  } catch (err) {
    commonErrorHandler(req, res, err.message, 400, err);
  }
};

export { createTodo, getAllTodo };
