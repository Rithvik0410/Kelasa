const mongoose = require("mongoose");

const cheddi_gengSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const cheddi_gengModel = mongoose.model("geng", cheddi_gengSchema);
module.exports = cheddi_gengModel;
