import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Currency Calculator</h1>
      <CurrencyCalculator />
    </div>
  );
}

function CurrencyCalculator() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = "998d23477019b08c3cdddac3";

  useEffect(() => {
    async function Convert() {
      if (fromCur === toCur) {
        setConvertedAmount(amount);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        // const res = await fetch(
        //   `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        // );
        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCur}`
        );

        if (!res.ok) throw new Error("Failed to fetch exchange rate");

        const data = await res.json();
        setConvertedAmount(data.conversion_rates[toCur]);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    Convert();
  }, [amount, fromCur, toCur]);

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="PKR">PKR</option>
        <option value="AFN">AFN</option>
      </select>
      <select
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="PKR">PKR</option>
        <option value="AFN">AFN</option>
      </select>

      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div className="result">
          <span>
            {isLoading ? "Converting..." : `${convertedAmount} ${toCur}`}
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
