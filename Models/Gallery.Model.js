const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    image: String,
    type: String,
    size: Number,
  },
  {
    versionKey: false,
  }
);

const GalleryModel = model("image", cartSchema);

module.exports = { GalleryModel };
