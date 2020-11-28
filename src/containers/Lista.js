import { Component, useState } from "react";
import './App.css';
import Button from '@material-ui/core/Button';

function Lista() {

    const [inputCorrente, setInputCorrente] = useState("Inserisci qui la tua lista");
    const [lista, setLista] = useState([]);

    const gestisciOnChange = (e) => {
        setInputCorrente(e.target.value);
    };

    const aggiungiAllaLista = () => {
        const listaAggiornata = [... lista];
        listaAggiornata.push(inputCorrente);
        setLista(listaAggiornata);
        setInputCorrente("Inserisci qui la tua lista");
    };

    return (
        <div className="App">
            <header className="App">
                <input value={inputCorrente} onChange={(e) => gestisciOnChange(e)}/>

                <br/>
                <br/>
                <Button variant="contained" color="secondary" onClick={() => aggiungiAllaLista()}>
                    Secondary
                </Button>
                <br/>

                <button type="button">AGGIUNGI</button>

                <ul>
                    {lista.map((elemento, indice) => { 
                        return (
                            <li>{elemento}</li>
                        )})
                    }
                </ul>
            </header>

        </div>
    );
}

export default Lista;