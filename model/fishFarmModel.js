var db = require("../database/connection");

var Water = function(water) {
  this.id = water.id;
  this.temperature = water.temperature;
  this.pH_level= water.pH_level;
  this.salt_content = water.salt_content;
  this.oxygen_saturation = water.oxygen_saturation;
  this.transparency = water.transparency;
};

Water.createWater = function(newWater, result) {
  db.query("INSERT INTO water set ?", newWater, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

Water.getWaterById = function(waterId, result) {
  db.query("Select * from water where id = ? ", waterId, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Water.getAllWater = function(result) {
  db.query("Select * from water", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Water.remove = function(waterId, result) {
  db.query("DELETE FROM water WHERE id = ?", waterId, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Water;
