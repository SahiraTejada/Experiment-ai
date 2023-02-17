const express = require('express');
const router = express.Router();
const {generateImage}  = require('../controllers/generateImage');
const {generateResponseBot} = require('../controllers/chatbot');

router.post('/generateimage',generateImage);
router.post('/chatbot',generateResponseBot);
module.exports = router;