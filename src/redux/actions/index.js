// import getCurrencies from '../../services/currenciesAPI';

export const USER_LOGIN = 'USER_LOGIN';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';
export const ENDPOINT_API = 'https://economia.awesomeapi.com.br/json/all';

export function userLogin(payload) {
  return {
    type: USER_LOGIN,
    payload,
  };
}

export const walletInfo = (currencyData) => ({
  type: CURRENCIES,
  payload: currencyData,
});

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch(ENDPOINT_API);
  const data = await response.json();

  const dataKeys = Object.keys(data);
  const currencies = dataKeys.filter((item) => item !== 'USDT');

  dispatch(walletInfo(currencies));
};
