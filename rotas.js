const express = require('express');
const router = express.Router();

// Controllers
const contollerLogin = require("./controllers/login.controller.js");

router.get("/", (req, res) => res.render("home"));
router.get("/login", (req, res) => res.render("login"));
router.post("/login", (req, res) => contollerLogin.login(req, res));
router.post("/logout", (req, res) => contollerLogin.logout(req, res));


module.exports = router