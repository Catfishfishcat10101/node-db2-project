const express = require("express");
const helmet = require("helmet");
const carsRouter = require("./cars/cars-router");
const server = express();

// Middleware
server.use(helmet());
server.use(express.json());

// Routes
server.use("/api/cars", carsRouter);

// 404 Not Found
server.use("*", (req, res, next) => {
  next({ status: 404, message: "Not found!" });
});

// Error Handling Middleware
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = server;