const mongoose = require("mongoose");
const Joi = require("joi");

mongoose.connect(
  "mongodb+srv://yogesh:yogesh@cluster0.7sqwppe.mongodb.net/joi"
);

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  contact: Number,
  email: String,
});

function validateModel(data) {
  const userJoiSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    name: Joi.string().min(2).max(100).required(),
    age: Joi.number().integer().min(1).max(120).required(),
    contact: Joi.number().required(),
    email: Joi.string().email().required(),
  });
  let { error } = userJoiSchema.validate(data);
  return error;
}

const userModel = mongoose.model("User", userSchema);

module.exports = { userModel, validateModel };
