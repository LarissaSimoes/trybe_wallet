import React from 'react';
import { screen } from '@testing-library/react';
// import { legacy_createStore as createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';
// import rootReducer from '../redux/reducers';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testes Trybe Wallet', () => {
  test('Testando campos de e-mail, senha, botão entrar e exibições na tela da carteira', () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = 'email-input';
    expect(screen.getByTestId(emailInput)).toBeInTheDocument();

    const passwordInput = 'password-input';
    expect(screen.getByTestId(passwordInput)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();

    userEvent.type(screen.getByTestId(emailInput), 'larissa@hotmail.com');
    userEvent.type(screen.getByTestId(passwordInput), '123456');
    userEvent.click(screen.getByRole('button', { name: /entrar/i }));

    const emailField = 'email-field';
    expect(screen.getByTestId(emailField)).toBeInTheDocument();

    const totalField = 'total-field';
    expect(screen.getByTestId(totalField)).toBeInTheDocument();

    const currencyField = 'header-currency-field';
    expect(screen.getByTestId(currencyField)).toBeInTheDocument();
  });
});
