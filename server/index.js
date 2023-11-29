const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json()).use(cors()).use(router);

app.listen(PORT, () => {
  console.log(`Listen to server at: http://localhost:${PORT}`);
});
