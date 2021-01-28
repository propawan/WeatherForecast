import './App.css';
import Card from './Card';
import { useState, useEffect } from 'react';
import DropDown from './DropDown';

function App() {
  const [inputTemp, setInputTemp] = useState([]);
  const [currCountry, setCurrCountry] = useState("london");

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${currCountry}&mode=json&appid=c9e128bafece16f2a16d5f186adfe415`)
      .then(response => response.json())
      .then((data) => {
        setInputTemp(data.list.filter((_, i) => (i % 8) === 0));
        console.log(currCountry);
      })
  }, [currCountry])
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">5-Day Forecast.</h1>

        </div>
      </div>

      <DropDown setCurrCountry={setCurrCountry}></DropDown>

      <h1 id="place" style={{ textAlign: 'center' }}>{currCountry}</h1>
      <div className="cardContainer">
        {
          inputTemp.map((item, i) => <Card key={i} item={item}></Card>)
        }
      </div>
    </>
  )
};

export default App;

// Check check git
