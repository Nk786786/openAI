const express = require("express")
const { generateImage } =require("../../routes/openaiController")
const router =express.Router()

router.post("/generateimage", generateImage)

module.exports = router