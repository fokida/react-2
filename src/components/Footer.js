import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="info">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </div>
        <div className="social">
          <ul className="list">
            <li className="list_social">
              <a href="https://www.instagram.com">
                <i
                  className="fa-brands fa-instagram fa-2xl"
                  style={{ color: "#ffffff" }}
                ></i>
              </a>
            </li>
            <li className="list_social">
              <a href="https://facebook.com">
                <i
                  className="fa-brands fa-square-facebook fa-2xl"
                  style={{ color: "#ffffff" }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
