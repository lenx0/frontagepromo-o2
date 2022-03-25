const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/login', (req, res) => {
    res.render('login')
});
router.post("/login", (req, res) => {
    login.controller.login(req, res)
});

router.get("/", (req, res) => res.render("home"));

router.get("/login", (req, res) => res.render("login"));


module.exports = router