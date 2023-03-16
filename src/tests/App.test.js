import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testes Trybe Wallet', () => {
  const emailInput = 'email-input';
  const passwordInput = 'password-input';

  test('Testando campos de e-mail, senha, botão entrar e exibições na tela da carteira', () => {
    renderWithRouterAndRedux(<App />);

    expect(screen.getByTestId(emailInput)).toBeInTheDocument();
    expect(screen.getByTestId(passwordInput)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeDisabled();

    userEvent.type(screen.getByTestId(emailInput), 'larissa@hotmail.com');
    userEvent.type(screen.getByTestId(passwordInput), '123456');
    expect(screen.getByRole('button', { name: /entrar/i })).toBeEnabled();
    userEvent.click(screen.getByRole('button', { name: /entrar/i }));

    const emailField = 'email-field';
    expect(screen.getByTestId(emailField)).toBeInTheDocument();

    const totalField = 'total-field';
    expect(screen.getByTestId(totalField)).toBeInTheDocument();

    const currencyField = 'header-currency-field';
    expect(screen.getByTestId(currencyField)).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /trybe wallet/i, level: 1 })).toBeInTheDocument();
  });
});

describe('', () => {
  const emailInput = 'email-input';
  const passwordInput = 'password-input';
  beforeEach(() => {
    renderWithRouterAndRedux(<App />);
  });

  test('', async () => {
    userEvent.type(screen.getByTestId(emailInput), 'larissa@hotmail.com');
    userEvent.type(screen.getByTestId(passwordInput), '123456');
    userEvent.click(screen.getByRole('button', { name: /entrar/i }));
    userEvent.type(screen.getByTestId('value-input'), '10');
    userEvent.click(screen.getByRole('button', { name: /adicionar despesa/i }));
    await waitFor(() => expect(screen.getByTestId('delete-btn')).toBeInTheDocument());
  });
});
