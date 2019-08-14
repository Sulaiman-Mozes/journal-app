import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// export const Authenticate = (token) => {
//   try {
//     const res = decode(token);
//     if (res.exp > Date.now() / 1000) {
//       return { res };
//     }
//     return false;
//   } catch (error) {
//     return false;
//   }
// };

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('isloggedIn');
  return (
    <Route
      {...rest}
      render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;
