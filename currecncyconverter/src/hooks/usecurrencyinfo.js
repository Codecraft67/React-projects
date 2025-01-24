import { useEffect, useState } from "react";

function useCurrencyInfo() {
  const [data, setData] = useState([]); // Store the list of currencies
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
        );

        if (!response.ok) {
          throw new Error(`Error fetching currencies: ${response.statusText}`);
        }

        const result = await response.json();

        // Convert result into an array of { code, name } objects
        const formattedData = Object.entries(result).map(([code, name]) => ({
          code,
          name,
        }));

        setData(formattedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCurrencies();
  }, []);

  return { data, error };
}

export default useCurrencyInfo;
