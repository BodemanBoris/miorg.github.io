import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="social__container">
        <a href="#">
          <BsInstagram />
        </a>
        <a href="#">
          <BsFacebook />
        </a>
        <a href="#">
          <BsTwitter />
        </a>
      </div>
      <div className="logo__container">
        <img src="./Group 1.png" alt="" />
      </div>
      <div className="text__container">
        <p>Desarrollado por </p>
        <br />
        <strong>Boris Bodeman</strong>
      </div>
    </footer>
  );
};

export default Footer;
