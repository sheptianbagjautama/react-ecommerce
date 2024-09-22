import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cart.Route.js";

//App Config
const app = express(); //menggunakan express.js
const port = process.env.PORT || 4000; //port ketika backend dijalankan
connectDB(); //memanggil fungsi connectDB untuk menghubungkan dengan database mongodb
connectCloudinary(); //configurasi dan menghubungkan cloudinary untuk keperluan upload gambar

//middlewares
app.use(express.json()); //request yang kita dapatkan akan menggunakan json
app.use(cors()); //agar backend dapat di akses di ip manapun , kalo tidak menggunakan ini akan kena block CORS

//api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.user("/api/cart", cartRouter);

//ini endpoint yang bisa digunakan
app.get("/", (req, res) => {
  res.send("API Working");
});

//ini untuk menjalankan backend
app.listen(port, () => console.log("Server started on PORT : " + port));
