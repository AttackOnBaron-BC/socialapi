import mongoose from 'mongoose';
import { User, Thought} from '../models/index.js';
import { users, thoughts } from './data.js';
import connection from '../config/connection.js';

const seedDatabase = async (): Promise<void> => {
  try {
    // Clear existing data
    await mongoose.connection.dropDatabase();
    console.log('Database cleared');

    // Create users
    await User.create(users);
    console.log('Users seeded successfully');

    // Create thoughts
    await Thought.create(thoughts);
    console.log('Thoughts seeded successfully');

    console.log('All data seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
};

// Connect to database and seed data
connection.once('open', async () => {
  await seedDatabase();
}).on('error', (err) => {
  console.error('Error connecting to database:', err);
  process.exit(1);
});