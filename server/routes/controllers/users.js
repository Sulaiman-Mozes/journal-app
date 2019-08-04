const bcrypt = require('bcrypt');
const User = require('../../models/User');


module.exports = {
  createUser: (req, res) => {
    const { email, password, username } = req.body;
    User.findOne({ email }, (err, user) => {
      if (user) {
        return res.status(400).json({ msg: 'Email Already In Use' });
      }
      const newUser = new User({ email, password, username });

      return bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(resp => res.status(201).json({ id: resp.id, username: resp.username, email: resp.email }))
            .catch(err => console.log(err));
        });
      });
    });
  },
};
