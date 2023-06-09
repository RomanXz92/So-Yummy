const Joi = require("joi");
const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
  {
    title: {
      type: String,
    },
    category: {
      type: String,
    },
    area: {
      type: String,
    },
    instructions: {
      type: String,
    },
    description: {
      type: String,
    },
    thumb: {
      type: String,
    },
    preview: {
      type: String,
    },
    time: {
      type: String,
    },
    popularity: {
      type: Number,
    },
    favorites: {
      type: Array,
    },
    likes: {
      type: Array,
    },
    youtube: {
      type: String,
    },
    tags: {
      type: Array,
    },
    ingredients: {
      type: Array,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Recipe = model("recipe", recipeSchema);

module.exports = Recipe;
