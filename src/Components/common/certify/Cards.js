import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import angular from './images/angular.png'
import react from './images/react.png'
import ruby from './images/ruby.png'
import ml from './images/ml.png'
import dl from './images/dl.png'
import python from './images/python.png'
function Cards() {
  return (
    <div className="cards">
      <h2>Get Certified - Stand out from the crowd</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={angular}
              text="Angular is a framework that works with Typescript or JavaScript to render dynamic page content."
              path="/angular"
            />
            <CardItem
              src={react}
              text="React is a framework that works with Javascript to render dynamic page content."
              
              path="/react"
            />
            <CardItem
              src={ruby}
              text="It ships with all the tools needed to build amazing web apps on both the front and back end."
              
              path="/ruby"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={ml}
              text="Machine learning is the science of getting computers to act without being explicitly programmed. "
              
              path="/ml"
            />
            <CardItem
              src={dl}
              text="Deep learning is a type of machine learning and artificial intelligence (AI) that imitates the way humans gain certain types of knowledge."
              
              path="/dl"
            />
            <CardItem
              src={python}
              text="Python is a high-level, interpreted, general-purpose programming language."
              
              path="/python"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;