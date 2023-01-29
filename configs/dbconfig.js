const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mongobasics-cluster.xxxwrvw.mongodb.net/lashme?retryWrites=true&w=majority`
  );
  if (mongoose.connection.readyState === 1) {
    console.log("DB connected");
    return true;
  } else {
    return false;
  }
};
