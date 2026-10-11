const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send('GET method was used - Get a random book');
});

module.exports = router;
