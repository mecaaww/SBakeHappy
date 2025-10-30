import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("🍰 Welcome to S-BakeHappy API!");
});

app.get("/products", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./data.json"));
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to read data.json" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`✅ S-BakeHappy API running on port ${port}`);
});
