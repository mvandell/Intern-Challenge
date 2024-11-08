require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const ViteExpress = require("vite-express");

const app = express();

// Logging middleware
app.use(morgan("dev"));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Backend Routes


app.use((error, req, res, next) => {
  console.error('SERVER ERROR: ', error);
  if (res.statusCode < 400) {
      res.status(500);
  }
  res.send({
    error: error.message,
    name: error.name,
    message: error.message,
    table: error.table,
  });
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on http://localhost:3000"),
);
