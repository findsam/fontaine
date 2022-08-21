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
              width="296"
              height="81"
              viewBox="0 0 296 81"
              fill="none"
            >
              <path
                d="M55 26C12.0002 49 -36.4995 91.5 76.0005 75.5C226.956 54.0308 345.335 34.6395 271.8 11.0053C208 -9.50002 78.8069 9.37857 1.5 34"
                stroke="#FFAC5F"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
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
