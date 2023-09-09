const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SwiperSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Swiper = mongoose.model("swiper", SwiperSchema);

module.exports = Swiper;
