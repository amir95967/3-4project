const express = require("express");
const router = express.Router();

router.get("/", async(req,res) => {
  res.json({msg:"endpoint!"});
})

module.exports = router;