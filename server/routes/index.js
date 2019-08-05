const express = require('express');
const UserContoller = require('./controllers/users');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to my journal');
});

router.post('/api/users/register', UserContoller.addUser);
router.post('/api/users/login', UserContoller.login);

module.exports = router;
