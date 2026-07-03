export const seedData = {
    users: [
        { id: '1', name: 'Ada', email: 'ada@example.com' },
        { id: '2', name: 'Linus', email: 'linus@example.com' },
        { id: '3', name: 'Grace', email: 'grace@example.com' }
    ],
    teams: [
        { id: 'team-1', name: 'Alpha Squad', members: ['1', '2'] },
        { id: 'team-2', name: 'Beta Crew', members: ['3'] }
    ],
    activities: [
        { id: 'act-1', userId: '1', type: 'run', duration: 30 },
        { id: 'act-2', userId: '2', type: 'cycle', duration: 45 }
    ],
    leaderboard: [
        { id: 'rank-1', userId: '1', score: 120 },
        { id: 'rank-2', userId: '2', score: 95 },
        { id: 'rank-3', userId: '3', score: 88 }
    ],
    workouts: [
        { id: 'workout-1', name: 'HIIT Cardio', difficulty: 'intermediate' },
        { id: 'workout-2', name: 'Core Strength', difficulty: 'beginner' }
    ]
};
