import express from "express";
import cors from "cors";
import "dotenv/config";

//App Config
const app = express(); //menggunakan express.js
const port = process.env.PORT || 4000; //port ketika backend dijalankan

//middlewares
app.use(express.json()); //request yang kita dapatkan akan menggunakan json
app.use(cors()); //agar backend dapat di akses di ip manapun , kalo tidak menggunakan ini akan kena block CORS

//api endpoints

//ini endpoint yang bisa digunakan
app.get("/", (req, res) => {
  res.send("API Working");
});

//ini untuk menjalankan backend
app.listen(port, () => console.log("Server started on PORT : " + port));
