const { Router } = require("express");
const { GalleryModel } = require("../Models/Gallery.Model");

const galleryRoute = Router();

galleryRoute.get("/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    let data = await GalleryModel.find({ _id: ID });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

galleryRoute.get("/", async (req, res) => {
  const title = req.query.title;
  if (title) {
    try {
      let productData = await GalleryModel.find({
        $and: [{ title: { $regex: `${title}`, $options: "i" } }],
      });
      res.send(productData);
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: err.message });
    }
  } else if (title) {
    try {
      const productData = await GalleryModel.find({
        title: { $regex: `${title}`, $options: "i" },
      });
      res.send(productData);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  } else {
    const product = await GalleryModel.find();
    res.send(product);
  }
});

galleryRoute.post("/create", async (req, res) => {
  let {base64} = req.body
  try {
    await GalleryModel.insertMany(base64);
    res.status(201).send({ msg: "Product has been added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

galleryRoute.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await GalleryModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send({ msg: `Product with id:${ID} has been updated` });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

galleryRoute.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await GalleryModel.findByIdAndDelete({ _id: ID });
    res.send({ msg: `Product with id:${ID} has been deleted` });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = { galleryRoute };
