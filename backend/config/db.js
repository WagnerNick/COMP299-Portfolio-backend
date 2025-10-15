const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://portfolioUser:portPassword@portfolio.twzn25h.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio';

module.exports = async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected (from config/db.js)');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};
