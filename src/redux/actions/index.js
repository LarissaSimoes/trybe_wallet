export const USER_LOGIN = 'USER_LOGIN';
export const CURRENCIES = 'CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const API = 'https://economia.awesomeapi.com.br/json/all';

export function userLogin(payload) {
  return {
    type: USER_LOGIN,
    payload,
  };
}

export const walletInfo = (currencyInfo) => ({
  type: CURRENCIES,
  payload: currencyInfo,
});

export const addExpenseAction = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch(API);
  const data = await response.json();
  const dataKeys = Object.keys(data);
  const currencies = dataKeys.filter((element) => element !== 'USDT');

  dispatch(walletInfo(currencies));
};
