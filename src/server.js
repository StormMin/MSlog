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

app.post("api/blog", upload.single("image"), (req, res) => {
  let sql =
    "INSERT INTO blog (blog_story,nickname,password,img_url,age,title) VALUES (?,?,?,?,?,?)";
  let image = `http://localhost:/${prot}/image/` + req.file.filename;
  let name = req.body.name;
  let age = req.body.age;
  let password = req.body.password;
  let story = req.body.story;
  let title = req.body.title;
  let params = [story, name, password, image, age, title];
  db.query(sql, params, function (err, rows, fields) {
    res.send(rows);
    if (err) console.log(err);
    else console.log(rows.insertId);
  });
});
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
