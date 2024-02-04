/* eslint-disable import/extensions */
import Todo from '../models/todo.model.js';

const createTodo = async (payload) => {
  const { title, description } = payload;
  await Todo.create({ title, description, is_completed: false });
};

// eslint-disable-next-line no-return-await
const getAllTodo = async () => await Todo.find({});

export { createTodo, getAllTodo };
