const bodyParser = require("body-parser");
const express = require("express");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const dbConnect = require('./config/dbConnect');
const dotenv = require("dotenv").config();
const app = express();
const PORT = 5000;
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
const prodCategoryRouter = require("./routes/prodCategoryRouter");
const brandRouter = require("./routes/brandRouter");
const couponRouter = require("./routes/couponRouter");
const uploadRouter = require("./routes/uploadRouter");
const cookieParser = require('cookie-parser');
const morgan = require('morgan')
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/category", prodCategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/upload", uploadRouter);

app.use(cookieParser());
app.use(morgan('dev'))


app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});