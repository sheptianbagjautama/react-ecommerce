import mongoose from "mongoose";

//membuat schema product
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true },
  bestseller: { type: Boolean },
  date: { type: String, required: true },
});

//jika table product exist maka akan menggunakan table tsb , tapi jika tidak ada maka akan dibuat table nya
//berdasarkan referensi schema diatas
const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
