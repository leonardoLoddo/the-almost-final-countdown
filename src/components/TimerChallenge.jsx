import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(); //questo useRef conterrá il riferimento all'interval
  //in questo modo il valore inserito sará presente anche dopo la rivalutazione del componente da parte di react

  const dialog = useRef(); //questo useRef conterrá il riferimento alla finestra di dialogo in modo da poterla mostrare

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000; //controllo che il timer sia attivo verificando che il tempo rimanente sia maggiore di 0 ma anche inferiore al tempo di partenza

  //se finisce il tempo pulisco l'intervallo e mostro la modale
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal(); //mostro l'elemento dialog attraverso il suo metodo di default showModal()
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10); //ogni 10 millisecondoi decremento il tempo rimanente di 10
    }, 10);
  }

  //se il bottone di sto vine cliccato pulisco l'intervallo
  function handleStop() {
    clearInterval(timer.current);
    dialog.current.showModal();
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "i" : "o"}
        </p>
        <p>
          {/* se il timer é attivo al click si ferma, altrimenti al click parte */}
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Ferma" : "Inizia"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Il tempo corre..." : "Timer inattivo"}
        </p>
      </section>
    </>
  );
}
