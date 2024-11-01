const mongoose = require("mongoose");

async function connect() {
  try {
    const uri =
      "mongodb://127.0.0.1/PosturePal";
    await mongoose.connect(uri);
    console.log("Connect to DB Successfully");
  } catch (error) {
    console.log("Connect to DB failure");
  }
}
// "mongodb://127.0.0.1/PosturePal";
module.exports = { connect };
