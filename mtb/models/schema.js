const mongoose = require("mongoose");
const mds = new mongoose.Schema({
  todo: String,
});

module.exports = mongoose.model("to", mds);
