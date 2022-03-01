require("dotenv").config();
const express = require("express");
require("./DB");
const cors = require("cors");
const workersRouter = require("./routers/workers-routes");

const app = express();
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT);
app.use("/workers", workersRouter);
