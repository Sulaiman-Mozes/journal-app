import React from 'react';
import propTypes from 'prop-types';
import '../../assets/css/notfound.scss';

const NotFound = ({ title, text }) => (
  <div className="flex-notfound text-center">
    <div>
      <h2>{title}</h2>
      <br />
      <p>{text}</p>
    </div>
  </div>
);

NotFound.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
};

NotFound.defaultProps = {
  title: 'Something went wrong',
  text: 'Sorry, the page you are requesting for was not found',
};

export default NotFound;
