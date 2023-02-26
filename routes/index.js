const express= require("express");
const router = express.Router();

router.get("/", async(req,res) => {
  res.json({msg:"Api Work 200 13:15"});
})


module.exports = router;