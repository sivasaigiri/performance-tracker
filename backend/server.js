const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require('dotenv');
const logRoutes = require('./routes/log.js');
const userRoutes = require('./routes/user.js');
const connectDB = require('./config/config');
const cookieParser = require('cookie-parser');



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cors({credentials: true}))
//connect Database
connectDB();

// Routes
app.use('/api/logs', logRoutes);   // for logs
app.use('/api/user', userRoutes);  // for auth

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);

});
app.get('/',(req, res)=> res.send("api working"));