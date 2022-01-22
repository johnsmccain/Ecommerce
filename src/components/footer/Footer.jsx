import React from "react";
import { Facebook, LinkedIn, Telegram, Twitter } from "@mui/icons-material";
function Footer() {
  return (
    <footer className="container">
      <div className="container">
        <div className="container-footer">
          <div className="left f-section">
            <div className="logo">LOGO</div>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              ipsa eum in architecto deleniti velit!
            </p>
          </div>
          <div className="center f-section">
            <h3>customer Care</h3>
            <ul className="center-list">
              <li>Shop</li>
              <li>Track Order</li>
              <li>Return Policy</li>
              <li>Term of Service</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="right f-section">
            <h3>Be Fresh, Be Organic</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quos nulla qui perspiciatis et ex minima vitae, facilis libero
              dignissimos?
            </p>
          </div>
        </div>
        <div className="copyright flex flex_jc-sp-b">
          <div className="copyright-left">
            <span>
              copyright @2022|Design by Visual <del>learners</del> team
            </span>
          </div>
          <div className="copyright-icons">
            <Facebook className="icon" />
            <LinkedIn className="icon" />
            <Twitter className="icon" />
            <Telegram className="icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
