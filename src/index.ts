const express = require("express");
const _ = require("lodash");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
