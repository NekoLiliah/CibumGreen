import { useState } from "react";
import './App.css';
import Img from '../components/Img';

function App() {
  const [currentLabel, setCurrentLabel] = useState("Pinco Pallino");
  const [showImg, setShowImg] = useState(false);

  const handleClick = () => {
    console.log('CLICCATO');
    setShowImg(true);
    setCurrentLabel("Pluto");
  }

  return (
    <div className="App">
      <header className="App-header">
        {showImg && (
          <Img 
            label={currentLabel}
          />
        )}

        <Img 
          label={currentLabel}
        />

        <div onClick={handleClick}>
          CLICCAMI
        </div>
      </header>
    </div>
  );

  /*return (
    <div className="App">
      <header className="App-header">
        <Img 
          label={currentLabel}
        />

        <p>
          Hello, world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Img 
          label="Pluto"
        />

        <div onClick={() => setCurrentLabel("Pluto")}>
          CLICCAMI
        </div>
      </header>
    </div>
  );*/
}

export default App;
