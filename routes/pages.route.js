const express = require("express");
const router = express.Router()
const pagesController = require("../controllers/pages.controller")

router.get("/", pagesController.home)
router.get("/about", pagesController.about)




 module.exports=router;