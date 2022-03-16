import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  } , []);

  return (
    <div className='country'>
        <h1>Country List</h1>
        <h2>Available Country: {countries.length}</h2>
    </div>
  );
}

export default App;
