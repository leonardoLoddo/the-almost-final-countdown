import { useState } from "react";
export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState();
  const [isSubmitted, setIsSubmitted] = useState();
  function handleChange(event) {
    setIsSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }
  function handleClick() {
    setIsSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Benvenuto/a {isSubmitted ? enteredPlayerName : "entità ignota"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Salva</button>
      </p>
    </section>
  );
}
