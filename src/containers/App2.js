import {Component, useState} from 'react';
import './App.css';
import Img from '../components/Img';
import Lingue from '../components/Lingue';
import bandieraIt from '../assets/bandiera-it.png';
import bandieraEn from '../assets/bandiera-en.png';
import bandieraEs from '../assets/bandiera-es.png';

function App2() {
  const [currentLingua, setCurrentLingua] = useState("it");
  const [currentLabel, setCurrentLabel] = useState("Pinco Pallino");
  const [showImg, setShowImg] = useState(false);

  const gestisciClick = () => {
    console.log('HA CLICCATO');
    setCurrentLabel("Hai Cliccato");
    setShowImg(true);
  };

  const nascondiClick = () => {
    console.log('HA CLICCATO DI NUOVO');
    setShowImg(false);
  };
  // const testoEn = () =>{
  //   setCurrentLingua("en");
  // }
  // const testoIt = () =>{
  //   setCurrentLingua("it");
  // }
  // const testoEs = () =>{
  //   setCurrentLingua("es");
  // }
  const cambiaLingua = (linguaCliccata) =>{
    setCurrentLingua(linguaCliccata);
  };
  return (
    <div className="App">
      <header className="App-header">
      {/* {showImg &&(
          <>
            <Img 
              label={currentLabel}
            />
            <div onClick={nascondiClick} className="btn">
            CLICCA e NASCONDI
            </div>
        </>
        )}
       
       { !showImg &&(<div onClick={gestisciClick} className="btn">
        CLICCA e SCOPRI
      </div>)} */}
         
              <div><Lingue lingua={currentLingua} /></div>
              <div>
              <img src={bandieraIt} alt="bandieraIt" onClick={() => cambiaLingua("it")} className="btn2"/>
              <img src={bandieraEn} alt="bandieraEn" onClick={() => cambiaLingua("en")} className="btn2"/>
              <img src={bandieraEs} alt="bandieraEs" onClick={() => cambiaLingua("es")} className="btn2"/>
          </div>
      </header>
      
    </div>
  );
}

export default App2;