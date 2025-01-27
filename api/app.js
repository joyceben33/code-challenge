const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const loansRouter = require("./routes/loans");
const attributesRouter = require("./routes/attributes")
const cors = require('cors');


const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
	origin: 'http://localhost:8080'
}))

app.use("/loans",loansRouter);
app.use("/attributes",attributesRouter);
app.use("/", indexRouter);


module.exports = app;
