// Express app setup
const express = require("express");
const app = express();
const path = require('path');

// connecting to mongo database
const db = require('./db/db');

const dotenv = require('dotenv')
dotenv.config();

db() 

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

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send('API is running..!!!')
    })
}


// PORT
const port = process.env.PORT || 3002
app.listen(port, () => {
    console.log("Server is running on port " + port);
})
