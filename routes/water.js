var express = require("express");
var router = express.Router();
var Water = require("../model/fishFarmModel");

/* POST water */
router.post("/", function(req, res) {
  var newWater = new Water(req.body);
  console.log(req.body);
  if (
    !newWater.temperature ||
    !newWater.pH_level ||
    !newWater.salt_content ||
    !newWater.oxygen_saturation
  ) {
    res.status(400).json({
      error: true,
      message: "Please, provide temperature, pH_level, salt_content,oxygen_saturation , fields."
    });
  }
  Water.createWater(newWater, function(err, waterId) {
    if (err) res.json(err);
    res.json(waterId);
  });
});

/* GET list of water */
router.get("/", function(req, res) {
  Water.getAllWater(function(err, result) {
    if (err) res.json(err);
    res.json(result);
  });
});

/* GET water by id */
router.get("/:waterId", function(req, res) {
  Water.getWaterById(req.params.waterId, function(err, result) {
    if (err) res.json(err);
    res.json(result);
  });
});

/* DELETE water by id */
router.delete("/:waterId", function(req, res) {
  Water.remove(req.params.waterId, function(err, water) {
    if (err) res.json(err);
    res.json({ message: "Task successfully deleted" });
  });
});

module.exports = router;
