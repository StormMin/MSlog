const express = require("express");

const app = express();
const port = process.env.PORT || 5000;
const db = require("../server/config/db");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("<h1>MSLOG management</h1>");
  console.log("hi");
});
app.get("/api/blog", (req, res) => {
  db.query("SELECT * FROM blog", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.use("/image", express.static("./uploads"));

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
