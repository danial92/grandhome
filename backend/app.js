// Express app setup
const express = require("express");
const app = express();
const path = require('path');

// connecting to mongo database
// require('./db/db')
const db = require('./db/db');

const dotenv = require('dotenv')
dotenv.config();

db() // db() function should be called after dotenv.config(). Otherwise, It won't work

// Models
require("./models/projects_model");
require("./models/user_model");

app.use(express.json()); // recognizes the json object requests

// Routes
app.use(require("./routes/projectsRoute"));
app.use(require("./routes/authRoute"));
app.use(require("./routes/uploadRoute"));

const folder = path.resolve()
app.use('/uploads', express.static(path.join(folder, '/uploads')))

// PORT
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Server is running on port " + port);
})