import express from 'express';
import apiRouter from './api/api.router';
import appRouter from './app.router';

const app = express();

app.use(express.static('public', { index: false }));
app.use(apiRouter);
app.use(appRouter);

export default app;
