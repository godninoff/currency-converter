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
  const [currencyValue1, setCurrencyValue1] = React.useState('RUB')
  const [currencyValue2, setCurrencyValue2] = React.useState('USD')

  React.useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => {
        setCurrency((res.data.rates));
      })
      .catch((e) => console.log(e));
  }, []);

  // React.useEffect(() => {
  //   axios
  //     .get("https://ipapi.co/json")
  //     .then((res) => {
  //       setLocation(res.data.currency);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  // console.log(location)
  const handleChangeInputFrom = (count) => {
    setInputTo(count * currency[currencyValue2] / currency[currencyValue1]);
    setInputFrom(count);
  }

  const handleChangeCurrency = (currency1) => {
    setInputTo(inputFrom * currency[currencyValue2] / currency[currencyValue1]);
    setCurrencyValue1(currency1);
  }

  const handleChangeInputTo = (count) => {
    setInputFrom(count * currency[currencyValue1] / currency[currencyValue2]);
    setInputTo(count);
  }

  const handleChangeCurrencyTo = (currency2) => {
    setInputFrom(inputTo * currency[currencyValue1] / currency[currencyValue2]);
    setCurrencyValue2(currency2);
  }

  return (
    <div className="App">
      <h1>Currency</h1>
      <CurrencyInputs
        currency={currency}
        currencyInputValue={inputFrom}
        currencySelector={(e) => handleChangeCurrency(e.target.value)}
        onChangeAmount={handleChangeInputFrom}
        onChangeCurrencyType={(e) => setInputFrom(e.target.value)}
      />
      <CurrencyInputs
        currency={currency}
        currencyInputValue={inputTo}
        currencySelector={(e) => handleChangeCurrencyTo(e.target.value)}
        onChangeAmount={handleChangeInputTo}
        onChangeCurrencyType={(e) => setInputTo(e.target.value)}
      />
    </div>
  );
};

export default App;
