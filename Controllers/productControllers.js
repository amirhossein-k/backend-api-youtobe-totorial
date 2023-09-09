const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const Swiper = require("../models/swiperModel");
//
const listPortfolio = asyncHandler(async (req, res) => {
  const product = await Product.find({});
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({error: "not found"});
    throw new Error(`Product not found ${id}`);
  }
});

const createPortfolio = asyncHandler(async (req, res) => {
  const {title, pic} = req.body;

  const product = await Product.create({
    title,
    pic,
  });

  if (product) {
    res.status(201).json({
      title: product.title,
      pic: product.pic,
    });
  } else {
    res.status(400).json({error: "dont access to create"});
  }
});
// swiper
const createSwiper = asyncHandler(async (req, res) => {
  const {name, pic, text} = req.body;

  const swiper = await Swiper.create({
    name,
    pic,
    text,
  });

  if (swiper) {
    res.status(201).json({
      name: swiper.name,
      pic: swiper.pic,
      text: swiper.text,
    });
  } else {
    res.status(400).json({error: "dont access to create"});
  }
});
const listSwiper = asyncHandler(async (req, res) => {
  const swiper = await Swiper.find({});
  if (swiper) {
    res.status(200).json(swiper);
  } else {
    res.status(404).json({error: "not found"});
    throw new Error(`swiper not found `);
  }
});

module.exports = {createPortfolio, listPortfolio, createSwiper, listSwiper};
