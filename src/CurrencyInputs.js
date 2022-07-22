import React from "react";

const CurrencyInputs = (props) => {
  return (
    <div>
      <input
        type="number"
        value={props.currencyInput}
        onChange={props.valueChange}
      />
      <select value={props.currencies} onChange={props.change}>
        {props.currency.map((currency) => {
          return (
            <option key={currency} value={currency}>
              {currency}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CurrencyInputs;
