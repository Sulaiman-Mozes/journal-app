const express = require('express');
const authenticate = require('../middleware/authenticate');
const UserController = require('./controllers/users');
const JournalController = require('./controllers/journals');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to my journal');
});

// User Endpoints
router.post('/api/users/register', UserController.addUser);
router.post('/api/users/login', UserController.login);

// Journal Endpoints
router.get('/api/journals', authenticate, JournalController.list);
router.post('/api/journals', authenticate, JournalController.create);
router.delete('/api/journals/:journalId', authenticate, JournalController.delete);
router.get('/api/journals/:journalId', authenticate, JournalController.get);
router.put('/api/journals/:journalId', authenticate, JournalController.update);


module.exports = router;
