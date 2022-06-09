import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the services provided by us!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Learning content from more than 1000 companies in the form of challenges."
              label="User Interface"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Foster collaborations between AI and Machine Learning experts across the globe."
              label="AI Connect"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="One stop shop for Hiring world level technicians through our Managed HR services."
              label="IMS"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Plenitude of articles on new and emerging technologies ​
              to enable users to unlock a wide range of insights."
              label="Knowledge Creation"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Learn More"
              label="More"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
