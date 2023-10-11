import Counter from "./components/Counter/Counter";
import Title from "./components/Title/Title";
import Photo from "./assets/festa-foto.jpg";
import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div className="container" style={{ backgroundImage: `url(${Photo})` }}>
          <Title title="contagem" />
          <div className="countdown-container">
            <Counter title="Dias" number={2} />
            <Counter title="Horas" number={2} />
            <Counter title="Minutos" number={2} />
            <Counter title="Segundos" number={2} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
