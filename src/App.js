import React from "react";
import axios from "axios";
import "./App.css";
import CurrencyInputs from "./CurrencyInputs";

const App = () => {
  const BASE_URL = "https://api.exchangerate.host/latest";
  const [location, setLocation] = React.useState([]);
  const [currency, setCurrency] = React.useState([]);
  const [inputFrom, setInputFrom] = React.useState(1);
  const [inputTo, setInputTo] = React.useState(1);
  const [currencyFrom, setCurrencyFrom] = React.useState(location);
  const [currencyTo, setCurrencyTo] = React.useState("USD");
  const [amountInFromCurrency, setAmountInFromCurrency] = React.useState(true);

  // Вызываем API. Переводим полученный объект в массив, чтобы его размапить в select.
  React.useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => {
        setCurrency([...Object.keys(res.data.rates)]);
        setCurrencyFrom(res.data.rates);
        // setInputTo(res.data.rates.USD);
        // console.log(res);
      })
      .catch((e) => console.log(e));
  }, []);

  React.useEffect(() => {
    axios
      .get("https://ipapi.co/json")
      .then((res) => {
        setLocation(res.data.currency);
      })
      .catch((e) => console.log(e));
  }, []);

  // console.log(location);

  const handleChangeValueFrom = (e) => {
    setInputFrom(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleChangeValueTo = (e) => {
    setInputFrom(e.target.value);
    setAmountInFromCurrency(false);
  };

  React.useEffect(() => {
    if (!currency) {
      const value = () => {};
    }
  }, [currency]);

  return (
    <div className="App">
      <h1>Currency</h1>
      <CurrencyInputs
        currency={currency}
        currencyInput={inputFrom}
        change={(e) => setInputFrom(e.target.value)}
        valueChange={handleChangeValueFrom}
        // currencies={fromAmount}
      />
      <CurrencyInputs
        currency={currency}
        currencyInput={inputTo}
        change={(e) => setInputTo(e.target.value)}
        valueChange={handleChangeValueTo}
        // currencies={toAmount}
      />
    </div>
  );
};

export default App;
