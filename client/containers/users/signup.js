import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import SignupComponent from '../../components/signup';
import { signupUser } from '../../actions/users';


class SignupPage extends Component {
  state = { fields: { email: '', password: '', username: '' } }

  handleChange = (event) => {
    const { name, value } = event.target;
    const { fields } = this.state;
    this.setState({ fields: { ...fields, [name]: value } });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { registerUser } = this.props;
    const { fields } = this.state;
    registerUser(fields);
  }

  render() {
    const { fields } = this.state;

    return (
      <Fragment>
        <SignupComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          fields={fields}
        />
      </Fragment>
    );
  }
}

SignupPage.propTypes = {
  registerUser: propTypes.func.isRequired,
};

const mapDispatchToProps = {
  registerUser: signupUser,
};

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
