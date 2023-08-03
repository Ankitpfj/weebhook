// server.js

// Step 3.1: Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Step 3.2: Create an instance of the Express app
const app = express();
const port = 6000;

// Step 3.3: Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Step 3.4: Use the cors middleware to allow requests from all origins
app.use(cors());

// Step 3.5: Define a POST route to handle incoming requests
app.post("/webhook", (req, res) => {
  // Assuming the other server sends the response data in the request body
  const responseData = req.body;

  // Step 3.6: Log the response data
  console.log("Received response:", responseData);

  // Step 3.7: Send a simple response back to the other server
  res.send("Response received and logged successfully!");
});

// Step 3.8: Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
