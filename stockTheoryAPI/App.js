const express = require('express');
const app = express();
const db = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');
const cors = require('cors');

const InitiateMongoServer = async () => {
  try {
    await db.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

InitiateMongoServer();

//Middlewares - function executes when routes are hit.
app.use(bodyParser.json());
const userRoutes = require('./Routes/Users');
app.use('/Users', userRoutes);
app.use(cors());

// Route for on localhost:8001/
app.get('/', (req, res) => {
    res.json({ message: 'API is connected' });
});

const hostname = "192.168.1.76";
const port = process.env.PORT || 8001;
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
