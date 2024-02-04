/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import Joi from 'joi';
import { validateRequest } from '../helpers/validator.helper.js';

const createTodo = async (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  });

  validateRequest(req, res, next, schema, 'body');
};

export { createTodo };
