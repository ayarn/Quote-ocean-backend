const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

const cookieParser = require("cookie-parser");

// cors
const cors = require("cors");

// const whitelist = [
//   "https://quote-ocean-frontend-fl54oygiu-ayarn-modis-projects.vercel.app",
//   "https://quote-ocean-frontend.vercel.app",
// ];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error());
//     }
//   },
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true,
// };

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

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
