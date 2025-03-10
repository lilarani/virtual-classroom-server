require('dotenv').config();
const mongoose = require('mongoose');

const connectMongoDB = async () => {
  const res = await mongoose.connect(process.env.MongoDB_URL);

  if (res) {
    console.log('connect with database successfully');
  } else {
    console.log('something wrong');
  }
};

module.exports = connectMongoDB;
