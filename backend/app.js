const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", require("./Routes/UserRoutes"));


module.exports = app;
