const express = require("express");
const {
  createPortfolio,
  listPortfolio,
  createSwiper,
  listSwiper,
} = require("../Controllers/productControllers");

//
const router = express.Router();

//
router.route("/new").post(createPortfolio);
router.route("/list").get(listPortfolio);
// swiper
router.route("/swiper/new").post(createSwiper);
router.route("/swiper").get(listSwiper);

module.exports = router;
