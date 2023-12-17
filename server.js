const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

const cookieParser = require("cookie-parser");

// cors
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// connection to database
const connectDB = require("./db/dbConnection");
connectDB();

// middleware for json data + cookie parser
app.use(express.json());
app.use(cookieParser());

// contains all routes
app.use(require("./router/auth"));


// server running on this PORT
app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
