const express = require('express');
const router = express.Router();

router.post('/java', (request, response) => {
  response.send('Used POST method - /books/computers/java');
});

router.put('/python', (request, response) => {
  response.send('Used PUT method - /books/computers/python');
});

router.get('/game-dev', (request, response) => {
  response.send('Used GET method - /books/computers/game-dev');
});

module.exports = router;
