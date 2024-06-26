import express from 'express';

import cors from 'cors';
import cookieParser from 'cookie-parser';
import userDocImplementation from './services/swagger.js';

import router from './routers/index.router.js';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({
  extended: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/static', express.static('public'));

userDocImplementation(app);
app.use(router);

export default app;
