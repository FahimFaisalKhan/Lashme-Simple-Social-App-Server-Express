const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect(
    "mongodb+srv://Fahim_Admin:arkotoO0_@mongobasics-cluster.xxxwrvw.mongodb.net/lashme?retryWrites=true&w=majority"
  );
  if (mongoose.connection.readyState === 1) {
    console.log("DB connected");
    return true;
  } else {
    return false;
  }
};
