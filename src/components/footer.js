import Location from "../assets/location.jpg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__image">
        <img src={Location} />
        <div className="footer__image__location">US</div>
      </div>
      <div className="footer__text">
        <h4>Based in Los Angeles, California.</h4>
        <h5>Global Now, Fontaine Forever.</h5>
        <span>© 2022 Fontaine Co.</span>
      </div>
    </div>
  );
}
