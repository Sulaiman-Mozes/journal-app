const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 9999;


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to my journal');
});

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`));
