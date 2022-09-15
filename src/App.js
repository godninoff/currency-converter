import React from "react";
import axios from "axios";
import "./App.css";
import CurrencyInputs from "./CurrencyInputs";

const App = () => {
  const BASE_URL = "https://api.exchangerate.host/latest";
  const LOCATION = "https://ipapi.co/json";
  const [currency, setCurrency] = React.useState([]);
  const [inputFrom, setInputFrom] = React.useState("");
  const [inputTo, setInputTo] = React.useState("");
  const [currencyValue1, setCurrencyValue1] = React.useState("RUB");
  const [currencyValue2, setCurrencyValue2] = React.useState("USD");

  React.useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => {
        setCurrency(res.data.rates);
      })
      .catch((e) => console.log(e));
  }, []);

  React.useEffect(() => {
    axios
      .get(LOCATION)
      .then((res) => {
        setCurrencyValue1(res.data.currency);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleChangeInputFrom = (count) => {
    setInputTo((count * currency[currencyValue2]) / currency[currencyValue1]);
    setInputFrom(count);
  };

  const handleChangeCurrency = (currency1) => {
    setInputTo(
      (inputFrom * currency[currencyValue2]) / currency[currencyValue1]
    );
    setCurrencyValue1(currency1);
  };

  const handleChangeInputTo = (count) => {
    setInputFrom((count * currency[currencyValue1]) / currency[currencyValue2]);
    setInputTo(count);
  };

  const handleChangeCurrencyTo = (currency2) => {
    setInputFrom(
      (inputTo * currency[currencyValue1]) / currency[currencyValue2]
    );
    setCurrencyValue2(currency2);
  };

  const parseInput1 = Number(inputFrom).toFixed(2);
  const parseInput2 = Number(inputTo).toFixed(2);

  return (
    <div className="App">
      <h1>Currency converter</h1>
      <CurrencyInputs
        currency={currency}
        currencyInputValue={parseInput1}
        currencySelector={currencyValue1}
        onChangeAmount={(e) => handleChangeInputFrom(e.target.value)}
        onChangeCurrencyType={(e) => handleChangeCurrency(e.target.value)}
      />
      <CurrencyInputs
        currency={currency}
        currencyInputValue={parseInput2}
        currencySelector={currencyValue2}
        onChangeAmount={(e) => handleChangeInputTo(e.target.value)}
        onChangeCurrencyType={(e) => handleChangeCurrencyTo(e.target.value)}
      />
    </div>
  );
};

export default App;
