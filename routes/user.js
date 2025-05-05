const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test api called successfully");
});

module.exports = router;
