
import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertCurrency = () => {
    const rates = {
      USD: { EUR: 0.85, JPY: 110.29, GBP: 0.72 },
      EUR: { USD: 1.18, JPY: 129.85, GBP: 0.85 },
      JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0065 },
      GBP: { USD: 1.39, EUR: 1.17, JPY: 153.74 }
    };

    const converted = parseFloat(amount) * rates[fromCurrency][toCurrency];
    setConvertedAmount(converted.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <div className="input-group">
        <label>Amount:</label>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="input-group">
        <label>From:</label>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div className="input-group">
        <label>To:</label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <button onClick={convertCurrency}>Convert</button>
      {convertedAmount && (
        <div>
          <h2>Converted Amount:</h2>
          <p>{convertedAmount} {toCurrency}</p>
        </div>
      )}
    </div>
  );
}

export default App;
