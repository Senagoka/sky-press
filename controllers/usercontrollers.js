const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const getToken = require("../utils/getToken");
const Joi = require("joi");
const { validateAdduser } = require("../validations/uservalidation");

const addUser = async (req, res) => {
  // validate user
  const { error } = validateAdduser.validate(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  // complexity level and hashing using bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // find user from db
  const emailFound = await User.findOne({ email: req.body.email });
  if (emailFound) return res.status(404).send("email already exit");

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: hashedPassword,
  });

  await newUser.save();
  res.status(201).json({
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    phone: newUser.phone,
    token: getToken(newUser._id),
  });
};
// add user login
const userlogin = async (req, res) => {
  // user varification
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send("account not found");
  // password verification
  const varifiedPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!varifiedPassword)
    return res.status(404).send("email or password invalid");

  // res.headers("authorization", token_id).send(token_id)
  res.status(202).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    token: getToken(user._id),
  });
};
module.exports = { addUser, userlogin };
