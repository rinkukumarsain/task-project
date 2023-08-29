require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
const path = require('path');
const { connectDB } = require("./src/db/dbConnection");
const { apiRoutes } = require('./src/api/routes/');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname,'/public')));
apiRoutes(app);
app.listen(process.env.API_PORT, () => {
  console.log(`Server started on port ${process.env.API_PORT}`);
});

connectDB()
