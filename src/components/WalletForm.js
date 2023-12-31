import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, addExpenseAction } from '../redux/actions';
import getCurrencies from '../services/currenciesAPI';
import Select from './Select';
import Button from './Button';
import Input from './Input';

const Alimento = 'Alimentação';

const METHOD_LIST = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];

const TAG_LIST = [
  Alimento,
  'Lazer',
  'Trabalho',
  'Transporte',
  'Saúde',
];

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: Alimento,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { dispatch, expenses } = this.props;
    const stateInfo = this.state;
    const rates = await getCurrencies();
    const expense = expenses[expenses.length - 1];
    const expenseId = expense ? expense.id + 1 : 0;
    dispatch(addExpenseAction({
      id: expenseId,
      ...stateInfo,
      exchangeRates: rates,
    }));
    this.setState({
      value: '',
      description: '',
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currenciesData } = this.props;

    return (
      <form
        onSubmit={ this.handleSubmit }
      >
        <Input
          label="Valor "
          type="number"
          onChange={ this.handleChange }
          value={ value }
          name="value"
          dataTestId="value-input"
          required
        />
        <Input
          label="Descrição da despesa "
          type="text"
          onChange={ this.handleChange }
          value={ description }
          name="description"
          dataTestId="description-input"
          required
        />
        <Select
          onChange={ this.handleChange }
          value={ currency }
          label="Moeda: "
          name="currency"
          options={ currenciesData }
          dataTestId="currency-input"
        />
        <Select
          onChange={ this.handleChange }
          value={ method }
          label="Método de pagamento: "
          name="method"
          options={ METHOD_LIST }
          dataTestId="method-input"
        />
        <Select
          onChange={ this.handleChange }
          value={ tag }
          label="Categoria: "
          name="tag"
          options={ TAG_LIST }
          dataTestId="tag-input"
        />
        <Button
          type="submit"
          label="Adicionar despesa"
          disabled={ false }
        />
      </form>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currenciesData: PropTypes.instanceOf(Array).isRequired,
  expenses: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  currenciesData: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
