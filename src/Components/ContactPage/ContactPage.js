import React, { Component } from 'react';
import './ContactPage.css';
import EmailIcon from "../../icons/email.svg";

class ContactPage extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <div className="contactPage">
        <p className="contact">Contact us</p>
        <div className="info">
          <span className="phoneNumber">+9177-7999-8811</span>
          <span className="email">
              <a href="mailto:neowise.creations@gmail.com?subject=Check%20this%20out!&body=%3Cp%3EHi%3C%2Fp%3E%3Cimg%20src%3D%22data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4%2F%2F8%2Fw38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg%3D%3D%22%20alt%3D%22Red%20dot%22%20%2F%3E">
                <img src={EmailIcon} className="imageIcon" alt=""/> neowise.creations@gmail.com
              </a>
            </span> 
        </div>


      </div>
    );
  }
}

export default ContactPage;