const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    image: {
      type:String,
      required:true
    }
  },
  {
    versionKey: false,
  }
);

const GalleryModel = model("image", cartSchema);

module.exports = { GalleryModel };
