const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const app = express();
const PORT = process.env.PORT || 9999;
const uri = process.env.MONGODB_URI;


mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.log(err));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to my journal');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
