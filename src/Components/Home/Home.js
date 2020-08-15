import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-scroll";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import InstagramIcon from "../../icons/insta.svg";
import FacebookIcon from "../../icons/fb.svg";

import Twitter from "../../icons/twitter.svg";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
import Flag from "../../assets/inflag.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: "NEOWISE",
      company_quote: "Spark of Your Closet",
      company_contact: "HELP & CONTACT",
      company_info: "ABOUT",
      company_home: "HOME",
      // open: false,
    };
  }

  render() {
    return (
      <div className="Home" id="home">
        <header>
          <div className="logo">
            <div>
              <span className="text">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {this.state.company_name}
                </Link>
              </span>
              <p>{this.state.company_quote} </p>
            </div>
            <div className="inflag">
              <img src={Flag} alt="" height="40px" width="60px"></img>
            </div>
          </div>

          <div className="contactDetails">
             <span>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {this.state.company_home}
              </Link>
            </span>
            <span>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {this.state.company_info}
              </Link>
            </span>
            <span>
              {" "}
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {this.state.company_contact}
              </Link>
            </span> 
          </div>
        </header>
        <div className="countdown">
          <div className="neo-poster">
            <ImageCarousel />
          </div>
          <CountDownTimer />
        </div>

        {/* {this.state.open ? (
          <div className="intro-details">
            {/* <span>About</span> }
            <AboutPage />
          </div>
        ) : null} */}

        <AboutPage />
        <footer id="contact">
          <div className="contactInfo">
            <ContactPage />
          </div>
          <div className="follow-us">
            <p className="follow-text">Follow us</p>
            <span className="footer-text">
              <a href="https://www.instagram.com/neowiseindia/?hl=en">
                <img src={InstagramIcon} className="imageIcon" alt="" />
                instagram
              </a>
            </span>

            <span className="footer-text">
              <a href="https://www.facebook.com/neowiseindia/">
                <img src={FacebookIcon} className="imageIcon" alt="" />
                facebook
              </a>
            </span>

            <span className="footer-text">
              <a href="https://twitter.com/neowiseindia">
                <img src={Twitter} className="imageIcon" alt="" />
                twitter
              </a>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
