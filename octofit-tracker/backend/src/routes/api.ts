import { Router } from 'express';

export const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

router.get('/leaderboard', (_req, res) => {
  res.json([
    { name: 'Ada', score: 120 },
    { name: 'Linus', score: 95 },
    { name: 'Grace', score: 88 }
  ]);
});
