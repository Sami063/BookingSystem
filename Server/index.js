const express = require('express'); // import express
const mongoose = require('mongoose');
const app = express();
const cors = require("cors")

app.use(cors()); // Important for fetching data/blocking
app.use(express.json()); // Reseive data from frontend as a json file

const PORT = 3002; // Backend port

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
