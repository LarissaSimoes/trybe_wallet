import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h1>Trybe Wallet</h1>
        <div data-testid="total-field">0</div>
        <div data-testid="header-currency-field">BRL</div>
        <div data-testid="email-field">{ email }</div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
