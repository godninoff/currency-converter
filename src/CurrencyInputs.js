import React from "react";

const CurrencyInputs = (props) => {

  const currencyArray = (Object.keys(props.currency))

  return (
    <div>
      <input
        type="number"
        value={props.currencyInputValue}
        onChange={(e) => props.onChangeAmount(e.target.value)}
      />
      <select value={props.currencies} onChange={props.currencySelector}>
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
