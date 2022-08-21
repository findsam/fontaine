import Footer from "./components/footer";
import Title from "./components/title";
import Slider from "./components/slider";
import Contact from "./components/contact";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="studio">
          <h5>Fontaine</h5>
          <span>Studio</span>
        </div>
        <Title>
          We create culture<span>*</span>
        </Title>
        <Title>through playing cards.</Title>
      </header>
      <Slider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
