import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import LoginComponent from '../../components/login';
import { userLogin } from '../../actions/users';


export class LoginPage extends Component {
  static getDerivedStateFromProps(props) {
    const {
      users: {
        user_data: { email, username, token },
        isloggedIn,
      }, history,
    } = props;
    if (email && username && token) {
      localStorage.setItem('AUTH_TOKEN', token);
      localStorage.setItem('AUTH_USERNAME', username);
      localStorage.setItem('AUTH_EMAIL', email);
      localStorage.setItem('isloggedIn', isloggedIn);
      history.push('/dashboard');
    }
    return null;
  }

  state = { fields: { email: '', password: '' } }

  handleChange = (event) => {
    const { name, value } = event.target;
    const { fields } = this.state;
    this.setState({ fields: { ...fields, [name]: value } });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { loginUser } = this.props;
    const { fields } = this.state;
    loginUser(fields);
  }

  render() {
    const { fields } = this.state;

    return (
      <Fragment>
        <LoginComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          fields={fields}
        />
      </Fragment>
    );
  }
}

LoginPage.propTypes = {
  loginUser: propTypes.func.isRequired,
};

const mapDispatchToProps = {
  loginUser: userLogin,
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
