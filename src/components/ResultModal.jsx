import { createPortal } from "react-dom";
export default function ResultModal({
  ref,
  targetTime,
  remainingTime,
  onReset,
}) {
  const userLost = remainingTime <= 0; //se il tempo rimanente é 0 il moio utente ha perso
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2); //formatto il tempo rimasto in secondi
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100); //calcolo il punteggio
  return createPortal(
    // associo lo useRef dialog all'elemento dialog in modo da potervi accedere dal componente TimerChallenge
    // valorizzo il parametro onCLose con la funzione destinata al reset, in questo modo l'utente potrà chiudere sia tramite bottone che tramite esc
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      {userLost && <h2>Hai perso</h2>}
      {!userLost && <h2>Punteggio: {score}</h2>}
      <p>
        Il tuo tempo obbiettivo era{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "i" : "o"}
        </strong>
      </p>
      {!userLost && (
        <p>
          Hai fermato il timer quando mancavano{" "}
          <strong>{formattedRemainingTime} secondi</strong>
        </p>
      )}
      {/* di default alla pressione di un bottone in un form con metodo 'dialog' in un dialogo, il dialogo viene chiuso */}
      <form method="dialog">
        <button>Chiudi</button>
      </form>
    </dialog>, //createPortal accetta due parametri: l'elemento jsx e il contenitore nel quale andrá a finire
    document.getElementById("modal") //cattura del div con id 'modal' presente in index.html
  );
}
