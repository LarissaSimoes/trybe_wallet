import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <caption>Tabela</caption>
          <tr>
            <th>Descrição</th>
          </tr>
          <tr>
            <th>Tag</th>
            {/* <td>teste</td> */}
          </tr>
          <tr>
            <th>Método de pagamento</th>
            {/* <td>teste</td> */}
          </tr>
          <tr>
            <th>Valor</th>
            {/* <td>teste</td> */}
          </tr>
          <tr>
            <th>Moeda</th>
            {/* <td>teste</td> */}
          </tr>
          <tr>
            <th>Câmbio utilizado</th>
            {/* <td>teste</td> */}
          </tr>
          <tr>
            <th>Valor convertido</th>
            {/* <td>teste</td> */}
          </tr>
          <tr>
            <th>Moeda de conversão</th>
            {/* <td>teste</td> */}
          </tr>
          <tr>
            <th>Editar/Excluir</th>
            {/* <td>teste</td> */}
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
