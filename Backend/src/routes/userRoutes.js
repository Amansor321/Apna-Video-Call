const express = require("express");
const {login,register, addToHistory, getUserHistory}= require("../controllers/userComtroller.js");
const router= express.Router();






router.post("/register",register);
router.post("/login",login)











module.exports = router;
