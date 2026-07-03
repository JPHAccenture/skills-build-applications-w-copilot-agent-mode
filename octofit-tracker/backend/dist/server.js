import express from 'express';
import cors from 'cors';
import './config/database.js';
import { router as apiRouter } from './routes/api.js';
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);
app.get('/', (_req, res) => {
    res.json({ message: 'OctoFit Tracker API is running' });
});
app.listen(port, () => {
    console.log(`OctoFit backend listening on port ${port}`);
});
