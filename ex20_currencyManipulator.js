const compose = (...functions) => (initialArg) =>
  functions.reduceRight(
    (accumulatedValue, func) => func(accumulatedValue),
    initialArg
  );

const currencies = {
  EUR: "EUR",
  SEK: "SEK",
  GBP: "GBP",
  USD: "USD",
};

const symbols = new Map([
  [currencies.GBP, "£"],
  [currencies.EUR, "€"],
  [currencies.USD, "$"],
]);
  
const exchangeRates = new Map([
  [currencies.EUR, {
    [currencies.SEK]: 10.5,
    [currencies.GBP]: 0.9,
    [currencies.USD]: 1.2,
  }
  ]
]);

const getConverterToYFromX = (x) => (y) => x * y;
const getCurrencyFormatter = (symbol) => (amount) => `${symbol} ${amount}`;
const getCurrencyRateProvider = (currencyFrom) => (currencyTo) =>
  currencyFrom[currencyTo];

const euroRates = exchangeRates.get(currencies.EUR);
const euroRateProvider = getCurrencyRateProvider(euroRates);
const euroToGbpRate = euroRateProvider(currencies.GBP);
const euroToGbpConverter = getConverterToYFromX(euroToGbpRate);
const gbpSymbol = symbols.get(currencies.GBP);
const gbpFormatter = getCurrencyFormatter(gbpSymbol);

const convertEuroAndFormatGbp = compose(gbpFormatter, euroToGbpConverter);

const eurAmounts = [1, 5, 10, 25, 50, 75, 100]
const gbpAmountsFormatted = eurAmounts.map(convertEuroAndFormatGbp);

console.log(gbpAmountsFormatted);
/* Output
[
  '£ 0.9', '£ 4.5',
  '£ 9',   '£ 22.5',
  '£ 45',  '£ 67.5',
  '£ 90'
]
*/
