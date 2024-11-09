const express = require('express');
const { getHomepage, createUsers } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);

router.get("/ren", (req, res) => {
    res.render('index.ejs');
});

router.post('/create-user', createUsers)


module.exports = router;