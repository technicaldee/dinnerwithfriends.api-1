const express = require('express');
const { authControllers } = require('../../controllers');

const router = express.Router();

router.post('/signup', authControllers.signup);
router.post('/signin', authControllers.signin);
router.get('/google/url', authControllers.getGAuthURL);
router.get('/google', authControllers.googleUserX)

module.exports = router;
