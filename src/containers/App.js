import { useState, useEffect } from "react";

import MenuIcon from '@material-ui/icons/Menu';
import CircularProgress from '@material-ui/core/CircularProgress';
import Menu from '../components/Menu';
import styled from 'styled-components';

import firebase from 'firebase';
import firebaseConfig from '../firebase-config.js';

firebase.initializeApp(firebaseConfig);


function onUtenteLoggato(utenteLoggatoCallback) {
  // Quando l'utente è loggato o si è sloggato, noi eseguiamo il codice interno al metodo onAuthStateChanged
  return firebase.auth().onAuthStateChanged((utenteParametro) => {
    if (utenteParametro) {
      console.log('utenteParametro', utenteParametro);
      utenteLoggatoCallback({
        loggato:true,
        nome: utenteParametro.displayName,
        mail: utenteParametro.email,
        uid: utenteParametro.uid
      });
    } else {
      utenteLoggatoCallback({
        loggato:false
      });
    }
  });
};

// Questo è uno snippet di Google paro paro
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const loggatiConGoogle = () => {
  auth.signInWithPopup(provider);
};

const logout = () => {
  firebase.auth().signOut();
};

function App() {
  // stato che utilizzeremo per aprire e chiudere il nostro menu laterale. Il menu può solo essere aperto o chiudo, perciò utilizzo un booleano (true/aperto, false/chiuso)
  const [menuVisibile, setMenuVisibile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [utente, setUtente] = useState({loggato:false});

  useEffect(() => {
    function utenteLoggatoCallback(utenteObj) {
      setUtente(utenteObj);
      setLoading(false);
    };
    
    onUtenteLoggato(utenteLoggatoCallback);
  }, []);

  // Questo si esegue solo quando lo stato di utente cambia
  useEffect(() => {
    if(utente.uid) {
      const utenteReferenza = firebase.database().ref('/utenti/' + utente.uid);
      utenteReferenza.once("value", (utenteDB) => {
        const cloneUtenteDb = utenteDB.val();
        if (cloneUtenteDb) {
          return null;
        } else {
          utenteReferenza.set({
            email: utente.mail,
            nome: utente.nome
          });
        }
     });
    }
  }, [utente]);



  const apriChiudiMenu = () => {
    // con il punto esclamativo prima di una variabile andiamo a selezionare il valore opposto di un booleano 
    // (se il valore di menuVisibile è true, noi lo mettiamo a false)
    // questo ci permette di non dover verificare prima di invocare questa funzione se dobbiamo aprire o chiudere il menu: lui lo capirà da solo!
    setMenuVisibile(!menuVisibile);
  };

  if (loading) {
    return (
      <ContenitoreLoading>
        <CircularProgress />
      </ContenitoreLoading>
    );
  }
  return (
    
    <Contenitore className="App">
      <header className="app-header">
        {/* questo bottone determina l'apertura o la chiusura del menu*/}
        <MenuIcon onClick={() => apriChiudiMenu()} />
        <Menu 
          menuVisibile={menuVisibile} 
          apriChiudiMenu={apriChiudiMenu} 
          utente = {utente}  
          loggatiConGoogle = {loggatiConGoogle}
          logout = {logout}
        />
      </header>
    </Contenitore>
  );
}

const Contenitore = styled.div`
  .app-header {
    background-color: #e0902c;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
    font-size: 20px;
    color: white;
  }
`;

const ContenitoreLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .MuiCircularProgress-colorPrimary {
      color: #e0902c !important;
    }
`;

export default App;