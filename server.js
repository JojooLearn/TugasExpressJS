require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Supermarket berjalan!");
});

// Sync DB
db.sequelize
  .sync({ alter: true }) // alter agar update struktur model ke DB
  .then(() => {
    console.log("Database connected & synchronized");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("Failed to sync db:", err));

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);


