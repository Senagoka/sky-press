const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const productsRoute = require("./routes/productsRoute");
const usersRoute = require("./routes/usersroute");
const cors = require("cors");

dotenv.config();

const app = express();

// connection
connectDB();

// middlwares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// route
app.use("/api/v1/products", productsRoute);
app.use("/api/v1/user", usersRoute);

// home route
app.get("/", (req, res) => {
  res.send("<h1>wellcome to my online shopping  api site<h1>");
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server started on port ${port}`));
