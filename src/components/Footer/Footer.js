import React from "react";
import "./footer.css";

import layer from "../../assets/Layer.svg";
import logo from "../../assets/miniLogo.svg";
import logo2 from "../../assets/miniLogo2.svg";

import instagram from "../../assets/Instagram.svg";
import dribble from "../../assets/Dribbble.svg";
import twitter from "../../assets/Twitter.svg";
import youtube from "../../assets/Youtube.svg";

import message from "../../assets/Message.svg";
import mobile from "../../assets/Mobile.svg";
import location from "../../assets/Location.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer__social">
          <div className="layer">
            <img src={layer} />
          </div>
          <div className="miniLogo">
            <img src={logo} />
          </div>
          <div className="miniLogo2">
            <img src={logo2} />
          </div>
          <div className="footer__social__text">
            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl
              nunc quam ac sed turpis volutpat.
            </p>
            <div className="footer__social__links">
              <div>
                <img src={instagram} />
              </div>
              <div>
                <img src={dribble} />
              </div>
              <div>
                <img src={twitter} />
              </div>
              <div>
                <img src={youtube} />
              </div>
            </div>
          </div>
        </div>

        <div className="footer__quick">
          <h5>Quick Links</h5>
          <div>
            <li>Portfolio</li>
            <li>Blogs</li>
            <li>About</li>
            <li>Press</li>
            <div className="footer_hiring">
              <li>Careers </li>
              <span> We're hiring</span>
            </div>
          </div>
        </div>

        <div className="footer__services">
          <h5>Services</h5>
          <div>
            <li>UX/UI Design</li>
            <li>App Development</li>
            <li>Web Development</li>
            <li>Quality Assurance</li>
            <li>Machine Learning </li>
          </div>
        </div>

        <div className="footer__reachUs">
          <h5>Reach us</h5>
          <div className="footer__message">
            <img src={message} />
            <p>hr@benchcorporation.com</p>
          </div>

          <div className="footer__message">
            <img src={mobile} />
            <p>+91 98765 43210</p>
          </div>

          <div className="footer__message">
            <img src={location} />
            <p>
              772 Lyonwood Ave <br /> Walnut, CA 91789
            </p>
          </div>
        </div>
      </div>
      <p className="footer_end_p">2021 BenchStudio. All rights reserved</p>
    </div>
  );
};

export default Footer;
