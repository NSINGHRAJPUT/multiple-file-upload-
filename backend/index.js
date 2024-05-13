const express = require("express");
const cors = require("cors");

const app = express();

const multer = require("multer");

app.use(cors());
const upload = multer({ dest: "uploads/" });
app.use(
  "/fileupload",
  upload.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
    { name: "file4" },
    { name: "file5" },
  ]),
  (req, res) => {
    res.send("Hello World!");
    console.log("files:------", req.files);
    console.log(req.body);
  }
);

app.listen(3333, () => {
  console.log("Example app listening on port 3000!");
});
