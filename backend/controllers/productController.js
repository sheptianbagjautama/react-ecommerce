import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0]; //jika image1 ada
    const image2 = req.files.image2 && req.files.image2[0]; //jika image2 ada
    const image3 = req.files.image3 && req.files.image3[0]; //jika image3 ada
    const image4 = req.files.image4 && req.files.image4[0]; //jika image4 ada

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // mengupload semua gambar yang di upload oleh user
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        //upload file
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for list product
const listProducts = async (req, res) => {};

// function for removing product
const removeProduct = async (req, res) => {};

// function for single product
const singleProduct = async (req, res) => {};

export { listProducts, addProduct, removeProduct, singleProduct };
