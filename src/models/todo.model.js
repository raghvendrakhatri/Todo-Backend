import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  is_completed: {
    type: Boolean,
    require: true,
    default: false,
  },
  created_at: {
    type: Date,
    require: true,
    default: new Date().toISOString(),
  },
  updated_at: {
    type: Date,
    require: true,
    default: new Date().toISOString(),
  },
});
const Todo = mongoose.model('Todo', schema);

export default Todo;
