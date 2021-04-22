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

const folder = path.resolve()
app.use('/uploads', express.static(path.join(folder, '/uploads')))

app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')))

app.use(require("./routes/projectsRoute"));
app.use(require("./routes/authRoute"));
app.use(require("./routes/uploadRoute"));


// PORT
const port = process.env.PORT || 3002
app.listen(port, () => {
    console.log("Server is running on port " + port);
})