const express = require("express");
const fs = require("fs");
const app = express();

app.get("/api/status", (req, res) => {
  const data = fs.readFileSync("services.json", "utf-8");
  res.json(JSON.parse(data));
});

app.listen(3000, () => {
  console.log("PulseBoard API running on port 3000");
});
