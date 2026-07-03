import { Router } from 'express';
import { User } from '../models/user.js';
import { Team } from '../models/team.js';
import { Activity } from '../models/activity.js';
import { LeaderboardEntry } from '../models/leaderboard.js';
import { Workout } from '../models/workout.js';
export const router = Router();
router.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
router.get('/users', async (_req, res) => {
    const users = await User.find({});
    res.json(users);
});
router.get('/teams', async (_req, res) => {
    const teams = await Team.find({});
    res.json(teams);
});
router.get('/activities', async (_req, res) => {
    const activities = await Activity.find({});
    res.json(activities);
});
router.get('/leaderboard', async (_req, res) => {
    const leaderboard = await LeaderboardEntry.find({});
    res.json(leaderboard);
});
router.get('/workouts', async (_req, res) => {
    const workouts = await Workout.find({});
    res.json(workouts);
});
