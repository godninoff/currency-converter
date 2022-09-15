import React from "react";

const CurrencyInputs = (props) => {
  const currencyArray = Object.keys(props.currency);

  return (
    <div className="currency-section">
      <input
        type="number"
        value={props.currencyInputValue}
        onChange={props.onChangeAmount}
      />
      <select
        value={props.currencySelector}
        onChange={props.onChangeCurrencyType}
      >
        {currencyArray.map((c) => {
          return (
            <option value={c} key={c}>
              {c}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CurrencyInputs;
