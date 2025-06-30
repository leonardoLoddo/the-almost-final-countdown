import { useState, useRef } from "react";
export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState();
  const playerName = useRef();

  function handleClick() {
    setEnteredPlayerName(playerName.current.value); //una costante useRef una volta associata ad un elemento jsx andrá a contenere lo stesso all'interno della sua chiave 'current', il funzionamento é molto simile a una cattura in manipolazione del dom
    playerName.current.value = ""; //svuoto il campo input
  }
  return (
    <section id="player">
      <h2>Benvenuto/a {enteredPlayerName ?? "entità ignota"}</h2>
      {/* con questa sintassi dico che se enteredPlayerName é truthy deve essere mostrato altrimenti mostra la stringa */}
      <p>
        <input ref={playerName} type="text" />
        {/* creo il riferimento con la costante useRef() */}
        <button onClick={handleClick}>Salva</button>
      </p>
    </section>
  );
}
