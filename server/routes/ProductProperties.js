const express = require("express");
const mongoose = require("mongoose");

// middlewares system
const route = express.Router();
route.use(express.json());

const propertiesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  types: {
    type: Array,
    required: true,
    validate: {
      validator: function (v) {
        return v && v.length > 0; // Custom validation to ensure the array is not empty
      },
      message: (props) => `Array field ${props.path} must not be empty!`,
    },
  },
  prices: [Number],
  typeIndex: {
    type: Number,
    required: true,
  },
});
