const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CheddiGengModel = require("./models/Geng");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://rithvik:oogabooga@cluster0.urshkeo.mongodb.net/cheddi_geng"
);

app.post("/register", (req, res) => {
  CheddiGengModel.create(req.body)
    .then((geng) => res.json(geng))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  CheddiGengModel.findOne({ name: name }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else res.json("Password is incorrect");
    } else res.json("No User Found");
  });
});
app.listen(3001, () => {
  console.log("server is running");
});

// Export the Express API for Vercel
module.exports = app;
