import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import env from './config/env.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(errorMiddleware);

app.set('port', env.port);

export default app;
