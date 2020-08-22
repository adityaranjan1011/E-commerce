import React, { Component } from "react";
import "./AboutPage.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact";
import MadhubaniImage from "../../assets/madhu1.jpeg";
import MadhubaniImage2 from "../../assets/madhu2.jpg";
// import ProfilePage from "../ProfilePage/ProfilePage";

class AboutPage extends Component { 

  render() {
    return (
      <div className="about-company">
      <div className="AboutPage" id="about">
        <div className="aboutImage">
          <MDBCarousel
            activeItem={1}
            length={2}
            showControls={true}
            showIndicators={false}
            className="imageCarousel"
            slide
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img 
                  className="madhubaniImage"
                    src={MadhubaniImage}
                    alt="firstImage"
                    
                  ></img>
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                  className="madhubaniImage"
                    src={MadhubaniImage2}
                    alt="Second slide"
                    
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </div>
        <div className="aboutToText">
          <p>
            Neowise India is a Bihar Textile Manufacturing Company and it's
            headquarter is in Hajipur Bihar. It is a first textile branded
            company who promote the Madhubani painting and the culture of Bihar
            to all over India with their branded fashion clothes. Neowise focus
            on <span className="para_text">Made In India</span> product, we can
            provide all categories of garments to our customers.
          </p>
        </div>
      </div>
       {/* <ProfilePage /> */}
       </div>
    );
  }
}

export default AboutPage;
