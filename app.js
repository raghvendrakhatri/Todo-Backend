/* eslint-disable import/extensions */
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import { registerRoutes } from './src/routes/index.js';
import { commonErrorHandler } from './src/helpers/common-function.helper.js';

const app = express();

// parse json data in request body
app.use(express.json());

// set cors
app.use(
  cors({
    origin: '*',
  }),
);

// compression
app.use(compression());

// helmet
app.use(helmet());

// health check
app.use('/health', (req, res) => {
  res.status(200).json({ message: 'Application runing successfully!' });
});

await registerRoutes(app);

// 404 Error Handling
app.use((req, res) => {
  const message = 'Invalid endpoint';
  commonErrorHandler(req, res, message, 400);
});

export default app;
