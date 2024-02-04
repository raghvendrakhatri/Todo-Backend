/* eslint-disable import/extensions */
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config({ path: './.env' });
/* eslint-disable */
import { connectDb } from './dbConnect.js';

const server = async function () {
  try {
    // connect MongoDB
    await connectDb();
    app.listen(process.env.SERVER_PORT);
    console.log(`--- Server started on ${process.env.SERVER_PORT} ---\n\n`);
  } catch (err) {
    console.log('err in main :- ', err);
  }
};

server();
