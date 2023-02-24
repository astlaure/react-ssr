import express from 'express';

const apiRouter = express.Router();

apiRouter.get('/api/articles', (req, res) => {
  setTimeout(() => {
    return res.json([
      {id: 1, title: 'Bobby Blues'},
      {id: 2, title: 'Bob The Builder'},
    ]);
  }, 2000);
})

export default apiRouter;
