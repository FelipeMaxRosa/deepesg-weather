const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Routes
const weatherRoutes = require("./routes/api/weather")

// BodyParser and Cors Middleware
app.use(cors());
app.use(express.json());

const { PORT } = process.env;

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to DeepESG API, access /weather to more details",
  });
});

// Use Routes
app.use("/api/weather", weatherRoutes);

// Listen Port
app.listen(PORT, () => {
  console.log(`Server run at port ${PORT}`);
});