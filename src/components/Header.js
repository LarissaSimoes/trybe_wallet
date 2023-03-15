import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <h1>Trybe Wallet</h1>
        <div data-testid="total-field">
          {expenses.reduce((acc, curr) => {
            const currentValue = Number(curr.currentValue)
            * Number(curr.exchangeRates[curr.currency].ask);
            return acc + currentValue;
          }, 0).toFixed(2)}
        </div>
        <div data-testid="header-currency-field">BRL</div>
        <div data-testid="email-field">{ email }</div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
