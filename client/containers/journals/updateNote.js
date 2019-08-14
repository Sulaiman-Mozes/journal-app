import React, { Component } from 'react';
import { connect } from 'react-redux';

class UpdateNote extends Component {
  componentWillMount() { }

  render() {
    return (
      <div>Update component</div>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateNote);
