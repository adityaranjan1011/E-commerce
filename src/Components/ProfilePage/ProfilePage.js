import React, { Component } from "react";
import "./ProfilePage.css";
import MadhubaniImage from "../../assets/adi.png";
import SD from "../../assets/sd.jpeg";
import Sahid from "../../assets/sahid.jpeg";
import Jha from "../../assets/jhaJi";
class ProfilePage extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  render() {
    return (
      <div>
        <h1 className="topic">Our Co-ordination</h1>
        <div className="ProfilePage">
          <div className="card">
            <img className="card-img-top" src={SD} alt="" />
            <div className="card-body">
              <p className="card-text">Founder & CEO Neowise</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={Sahid} alt="" />
            <div className="card-body">
              <p className="card-text">Co-founder & MD Neowise</p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={MadhubaniImage} alt="" />
            <div className="card-body">
              <p className="card-text">CTO Neowise</p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={Jha} alt="" />
            <div className="card-body">
              <p className="card-text">Marketing Executive Neowise</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
