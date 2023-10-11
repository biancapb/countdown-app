import Counter from "./components/Counter/Counter";
import Title from "./components/Title/Title";
import Photo from "./assets/festa-foto.jpg";
import "./App.css";

import useCountdown from "./hooks/useCountdown";

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2024 00:00:00");
  return (
    <>
      <div>
        <div className="App" style={{ backgroundImage: `url(${Photo})` }}>
          <div className="container">
            <div className="countdown-title">
              <Title title="Contagem Regressiva Ano 2024" />
              <div className="countdown-container">
                <Counter title="Dias" number={day} />
                <Counter title="Horas" number={hour} />
                <Counter title="Minutos" number={minute} />
                <Counter title="Segundos" number={second} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
