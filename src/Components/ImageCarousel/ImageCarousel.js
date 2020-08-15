import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import NeoBrand from "../../assets/neo1.jpeg";
import IndiaImage from "../../assets/indianflag.jpg";
import NeoImage from "../../assets/neo2.jpeg";

const ImageCarousel = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 neoImage"
                src={IndiaImage}
                alt="First slide"
                // height="400px" width="960px"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100 neoImage"
                src={NeoImage}
                alt="Second slide"  
                // height="400px" width="960px"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100  neoImage"
                src={NeoBrand}
                alt="Third slide"
                // height=" 400px" width="960px"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default ImageCarousel;

// export default ImageCarousel;