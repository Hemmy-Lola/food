const express = require("express");
const router = new express.Router();
const connection = require("../config/db");

// import controller user
const { signupUsers, loginUsers } = require("../controllers/userController");

// login route
router.post("/login", loginUsers);

// Signup route
router.post("/signup", signupUsers);
router.post("/contact", contactUsers);

module.exports = router;
