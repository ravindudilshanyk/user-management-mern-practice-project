const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/users", require("./Routes/UserRoutes"));


module.exports = app;
