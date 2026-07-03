import mongoose from 'mongoose';
import { User } from '../models/user.js';
import { Team } from '../models/team.js';
import { Activity } from '../models/activity.js';
import { LeaderboardEntry } from '../models/leaderboard.js';
import { Workout } from '../models/workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await LeaderboardEntry.deleteMany({});
    await Workout.deleteMany({});

    const users = await User.insertMany([
      { name: 'Ada Lovelace', email: 'ada@example.com', age: 35, fitnessGoal: 'Marathon prep' },
      { name: 'Linus Torvalds', email: 'linus@example.com', age: 54, fitnessGoal: 'Strength endurance' },
      { name: 'Grace Hopper', email: 'grace@example.com', age: 85, fitnessGoal: 'Daily mobility' }
    ]);

    await Team.insertMany([
      { name: 'Alpha Squad', members: [users[0]._id.toString(), users[1]._id.toString()], goal: 'Monthly step challenge' },
      { name: 'Beta Crew', members: [users[2]._id.toString()], goal: 'Consistency streak' }
    ]);

    await Activity.insertMany([
      { userId: users[0]._id.toString(), type: 'run', duration: 45, calories: 500, date: new Date('2026-07-01') },
      { userId: users[1]._id.toString(), type: 'cycle', duration: 60, calories: 650, date: new Date('2026-07-02') },
      { userId: users[2]._id.toString(), type: 'yoga', duration: 30, calories: 180, date: new Date('2026-07-03') }
    ]);

    await LeaderboardEntry.insertMany([
      { userId: users[0]._id.toString(), score: 1250, rank: 1 },
      { userId: users[1]._id.toString(), score: 1120, rank: 2 },
      { userId: users[2]._id.toString(), score: 980, rank: 3 }
    ]);

    await Workout.insertMany([
      { name: 'HIIT Cardio', difficulty: 'intermediate', duration: 25, focus: 'endurance' },
      { name: 'Core Strength', difficulty: 'beginner', duration: 20, focus: 'mobility' },
      { name: 'Recovery Flow', difficulty: 'easy', duration: 15, focus: 'recovery' }
    ]);

    console.log('Seeded users, teams, activities, leaderboard, and workouts');
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
