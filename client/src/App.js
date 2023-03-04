/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

import React, { useState} from 'react';


function App() {
  const [streetName, setStreetName] = useState('');
  const [scores, setScores] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/sentiment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ streetName }),
    });
    const data = await response.json();

    setScores(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Street name:
          <input
            type="text"
            value={streetName}
            onChange={(event) => setStreetName(event.target.value)}
          />
        </label>
        <button onClick={setScores}> Safety Score </button>
      </form>
      {scores.length > 0 ? (
        <div>
          <h2>Safety scores:</h2>
          <ul>
          <p>
          Safety Score for {streetName}: {setScores}
        </p>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
export default App;


