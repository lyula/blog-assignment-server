const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use the MONGODB_URI from environment variables
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
}
module.exports = connectDB;
