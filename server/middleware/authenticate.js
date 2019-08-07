/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
// const Env = require('dotenv');

// Env.config();

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(403).json({
        message: 'Token is Not Provided',
      });
    }
    const token = authorization.split(' ');
    const newtoken = token.length > 1 ? token[1] : token[0];
    const decoded_data = jwt.verify(newtoken, process.env.SECRET);
    req.body.user_data = decoded_data;
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid or Expired Token',
      error,
    });
  }
  return next();
};
