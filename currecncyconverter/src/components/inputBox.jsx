import React from "react";

export function InputBox({
  label,
  amount,
  CurrencyOptions,
  onCurrencyChange,
  selectCurrency,
  onAmountChange,
  amountDisable = false,
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex items-center space-x-2">
        {/* Amount input */}
        <input
          type="number"
          className="flex-1 p-2 border border-gray-300 rounded"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          disabled={amountDisable} // Disable editing if true
        />
        {/* Dropdown for currency selection */}
        <select
          className="p-2 border border-gray-300 rounded"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {CurrencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
