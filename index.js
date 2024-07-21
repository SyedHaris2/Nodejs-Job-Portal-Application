import express from "express";
import dotenv from "dotenv";
import colors from "colors";

//Dot ENC Config
dotenv.config();

//mongodb Connection

//Rest Object
const app = express();

//routes
app.get("/", (req, resp) => {
  resp.send("<h1> Welcome to Job Portal Application <h1/>");
});

//Port
const PORT = process.env.PORT || 4000;

//Listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DED_MODE} Mode on Port no ${PORT}`.bgCyan
  );
});
//npm run index
