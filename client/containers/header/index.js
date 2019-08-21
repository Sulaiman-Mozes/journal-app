import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutAction, updateLoginStatus } from '../../actions/users';
import { setAuthToken } from '../../utils/axiosInstance';
import HeaderComponent from '../../components/header';

export class Header extends Component {
  componentDidMount() {
    const token = localStorage.getItem('AUTH_TOKEN');
    const username = localStorage.getItem('AUTH_USERNAME');
    const email = localStorage.getItem('AUTH_EMAIL');
    const isloggedIn = localStorage.getItem('isloggedIn');

    const { updateLoginData } = this.props;
    if (token && username && email && isloggedIn) {
      updateLoginData({ token, username, email });
    }
  }

  logout = () => {
    const { logoutFunc } = this.props;
    localStorage.clear();
    logoutFunc();
    setAuthToken(false);
  }

  render() {
    const { users: { isloggedIn, user_data: { username } } } = this.props;
    return (
      <HeaderComponent
        logout={this.logout}
        isloggedIn={isloggedIn}
        username={username}
      />
    );
  }
}

const mapDispatchToProps = {
  logoutFunc: logoutAction,
  updateLoginData: updateLoginStatus,
};
const mapStateToProps = ({ users }) => ({ users });

Header.propTypes = {
  updateLoginData: PropTypes.func.isRequired,
  logoutFunc: PropTypes.func.isRequired,
  users: PropTypes.shape({
    isloggedIn: PropTypes.bool.isRequired,
    user_data: PropTypes.shape({ username: PropTypes.string }),
  }).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
