import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import winston from './config/winston';

import './app/services/blockchain';

import './config/dotenv';
import routes from './app/routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('combined', { stream: winston.stream }));

app.use('/api/v1', routes);

const { PORT, HOST } = process.env;

app.listen(PORT, HOST, () => {
  console.log('API is running!');
  console.log(`http://${HOST}:${PORT}/`);
});

module.exports = app;
