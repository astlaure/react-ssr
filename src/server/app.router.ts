import express from 'express';
import { render } from '../common/utils/server-side.util';

const appRouter = express.Router();

appRouter.get('/', (req, res) => {
  const data = { bobby: 'true' };
  return res.send(render(data, req.url));
});

appRouter.get('/articles', (req, res) => {
  const data = { articles: [{ id: 1, title: 'Lorem ipsum' }] };
  return res.send(render(data, req.url));
});

export default appRouter;
