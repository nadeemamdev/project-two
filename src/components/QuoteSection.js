// QuoteSection.js
import React, { useEffect, useState } from 'react';

const QuoteSection = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchZenQuote = async () => {
      try {
        const response = await fetch('https://zenquotes.io/api/random');
        const data = await response.json();

        if (response.ok) {
          setQuote(`"${data.q}" - ${data.a}`);
        } else {
          console.error('Error fetching Zen quote:', data);
        }
      } catch (error) {
        console.error('Error fetching Zen quote:', error);
      }
    };

    fetchZenQuote();
  }, []);

  return (
    <div>
      <h2>Zen Quote</h2>
      {quote ? <p>{quote}</p> : <p>Loading quote...</p>}
    </div>
  );
};

export default QuoteSection;
