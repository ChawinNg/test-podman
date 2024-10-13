const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a simple GET route
app.get("/api/example", (req, res) => {
  res.send("This is an example response!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
