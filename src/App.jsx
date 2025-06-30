import Footer from "./components/Footer.jsx";
import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Facile" targetTime={1} />
        <TimerChallenge title="Non facile" targetTime={5} />
        <TimerChallenge title="Diventa dura" targetTime={10} />
        <TimerChallenge title="Livello pro" targetTime={15} />
      </div>
      <Footer />
    </>
  );
}

export default App;
