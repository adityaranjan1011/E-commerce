import React, { Component } from "react";
import "./Home.css";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import InstagramIcon from "../../icons/insta.svg";
import FacebookIcon from "../../icons/fb.svg";
// import EmailIcon from "../../icons/email.svg";
import Twitter from "../../icons/twitter.svg";
import ImageCarousel from "../ImageCarousel/ImageCarousel";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: "NEOWISE",
      company_quote: "Spark of Your Closet",
      company_contact: "HELP & CONTACT",
      open: false,
    };
  }
  showContact = () => {
    console.log("help and contact");
  };

  render() {
    return (
      <div className="Home">
        <header>
          <div className="logo">
            <span className="text">{this.state.company_name}</span>
            <p>{this.state.company_quote} </p>
          </div>
         
          <div className="contactDetails">
            <span >HOME</span>
            <span >CATEGORY</span>
            <span onClick={this.showContact}>{this.state.company_contact}</span>
          </div>
        </header>
        <div className="countdown">
          <div className="neo-poster">
          <ImageCarousel/>
          </div>
          <CountDownTimer />
        </div>
        {/* {this.state.open ? ( */}
          <footer>
            {/* <span className="footer-text">
              <a href="mailto:adityamnnit2016@gmailcom?subject=Check%20this%20out!&body=%3Cp%3EHi%3C%2Fp%3E%3Cimg%20src%3D%22data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4%2F%2F8%2Fw38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg%3D%3D%22%20alt%3D%22Red%20dot%22%20%2F%3E">
                <img src={EmailIcon} className="imageIcon" alt=""/>
              </a>
            </span> */}
            <span className="footer-text">
              <a href="https://www.instagram.com/neowiseindia/?hl=en">
                <img src={InstagramIcon} className="imageIcon" alt=""/>
              </a> @NEOWISE
            </span>

            <span className="footer-text">
              <a href="https://www.facebook.com/neowiseindia/">
                <img src={FacebookIcon} className="imageIcon" alt=""/>
              </a> @NEOWISE
            </span>

             <span className="footer-text">
              <a href="https://www.instagram.com/neowiseindia/?hl=en">
                <img src={Twitter} className="imageIcon" alt=""/>
              </a> @NEOWISE
            </span>
            
            
          </footer>
        {/* ) : null} */}
      </div>
    );
  }
}

export default Home;
