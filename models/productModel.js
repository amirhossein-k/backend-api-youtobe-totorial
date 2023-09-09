const mongoose = require("mongoose");

//
const Schema = mongoose.Schema;

const PortfoliSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("portfolio", PortfoliSchema);
