import Title from "./components/title";
import Slider from "./components/slider";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Title>We build beautiful *</Title>
        <Title>websites and products.</Title>
      </header>

      <Slider />
    </div>
  );
}

export default App;
