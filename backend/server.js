const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const { Pool } = require("pg");
const bodyParser = require("body-parser");

const pool = new Pool({
  user: "postgres",
  host: "172.17.0.3",
  database: "postgres",
  password: "priyanka",
  port: 5432,
});

app.use(bodyParser.json());
app.use(cors());

app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password, balance } = req.body;
    const query =
      "INSERT INTO erupee.users (name, email, password,balance) VALUES ($1, $2, $3,$4)";
    const values = [name, email, password, balance];

    await pool.query(query, values);

    res.json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
