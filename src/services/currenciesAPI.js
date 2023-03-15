const getCurrencies = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currenciesResponse = await response.json();
  delete currenciesResponse.USDT;
  return currenciesResponse;
};

export default getCurrencies;
