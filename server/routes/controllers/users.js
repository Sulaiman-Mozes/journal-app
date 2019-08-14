/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

module.exports = {
  addUser: (req, res) => {
    const { username, email, password } = req.body;

    const newUser = new User({ username, email, password });

    User.findOne({ email }).exec((error, user) => {
      if (user) {
        return res.status(400).send({
          status: 'Failure',
          message: 'Email Address Already In Use',
        });
      }

      return bcrypt.hash(password, 10, (err, hash) => {
        newUser.password = hash;
        newUser.save((errr) => {
          if (errr) {
            return res.status(500).send({
              status: 'Fail',
              message: 'An error Occured while creating an Account , Try Again ',
            });
          }
          return res.status(201).send({
            status: 'success',
            message: 'Account Succesfully Created',
            data: {
              _id: newUser._id,
              username: newUser.username,
              email: newUser.email,
            },
          });
        });
      });
    });
  },

  login: (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }).exec((error, user) => {
      if (error || !user) {
        return res.status(401).send({
          message: 'Authentication Failed, Username or Password Incorrect',
        });
      }
      return bcrypt.compare(password, user.password, (err, resp) => {
        if (resp) {
          const token = jwt.sign({
            data: { _id: user._id, username: user.username, email: user.email },
          },
          process.env.SECRET,
          { expiresIn: '48h' });
          return res.status(200).send({
            message: 'Successfully Logged In',
            data: {
              username: user.username,
              email: user.email,
              token,
            },
          });
        }
        return res.status(401).send({
          message: 'Authentication Failed, Username or Password Incorrect',
        });
      });
    });
  },
};
