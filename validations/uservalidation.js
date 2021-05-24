const Joi = require("joi");

// register user validation
const validateAdduser = new Joi.object({
  name: Joi.string().min(10).required().max(20),
  email: Joi.string().email().min(12).required().max(1040),
  phone: Joi.string().min(10).required().max(40),
  password: Joi.string().min(8).max(50).required(),
});

module.exports = { validateAdduser };
