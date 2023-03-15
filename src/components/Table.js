import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenseAction } from '../redux/actions';

class Table extends Component {
  render() {
    const { expenses, dispatch } = this.props;
    return (
      <div>
        <table>
          <thead>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ Number(expense.value).toFixed(2) }</td>
                <td>{ expense.exchangeRates[expense.currency].name }</td>
                <td>
                  { Number(expense.exchangeRates[expense.currency].ask)
                    .toFixed(2) }
                </td>
                <td>
                  { Number(
                    expense.value * expense.exchangeRates[expense.currency].ask,
                  ).toFixed(2) }
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => dispatch(deleteExpenseAction(expense.id)) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.instanceOf(Array).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.wallet,
});

export default connect(mapStateToProps)(Table);
