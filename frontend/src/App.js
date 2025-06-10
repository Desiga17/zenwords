import React, { useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');

  const getQuote = async () => {
    const res = await fetch('http://localhost:5000/quote');
    const data = await res.json();
    setQuote(data.quote);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={getQuote}>Get Quote</button>
      <p>{quote}</p>
    </div>
  );
}

export default App;