import mongoose, { Schema } from 'mongoose';
const teamSchema = new Schema({
    name: { type: String, required: true },
    members: [{ type: String }],
    goal: { type: String, required: true }
});
export const Team = mongoose.model('Team', teamSchema);
