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
          We create{" "}
          <span className="draw">
            culture
            <svg
              className="x"
              width="300"
              height="80"
              viewBox="0 0 300 80"
              fill="none"
            >
              <path
                d="M55 26C13 49 -40 91 76.0005 80.5C226.956 65.0308 345 30.6395 281 11.0050C200 -9 85 0 1.5 40"
                stroke="#32bd64"
                stroke-width="2"
              ></path>
            </svg>
          </span>
          <span className="asterisk">
            <span>*</span>
          </span>
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
