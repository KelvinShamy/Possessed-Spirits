const asyncHandler = require('express-async-handler');
// asyncHandler is middleware for handling exceptions inside of async express routes and passing them to error handlers
// saves us writing our own try/catch for async/await and passes error on to next.
const Spirit = require('../models/dataModel');

const baseError = {
  message: 'An error occurred in in  spiritController',
  status: 400,
};

const spiritController = {};

spiritController.createSpirit = asyncHandler(async (req, res) => {
  const { name, ingredients, liquor, directions, garnish } = req.body;

  const spirit = await Spirit.create({
    name,
    ingredients,
    garnish,
    directions,
    liquor,
  });
  if (spirit) {
    res.status(201).json({
      _id: spirit._id,
      name: spirit.name,
      ingredients: spirit.ingredients,
      garnish: spirit.garnish,
      directions: spirit.directions,
      liquor: spirit.liquor,
    });
  } else {
    res.status(400);
    throw new Error('Data is not valid');
  }
});

spiritController.getSpirits = asyncHandler(async (req, res, next) => {
  const {liquor} = req.body;
  if (liquor === '') {
    return baseError;
  }

  res.locals.spirits = await Spirit.find();
  return next();
});

module.exports = spiritController;
