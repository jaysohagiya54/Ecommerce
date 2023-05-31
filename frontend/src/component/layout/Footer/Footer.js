import React from "react";
import playStore from "../../../images/playstore.jpg";
import appStore from "../../../images/appstore.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer"> 
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; SohagiyaJay</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/jaysohagiya45">Instagram</a>
        <a href="http://youtube.com/coder45jay">Youtube</a>
        <a href="http://facebook.com/jaysohagiya">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;