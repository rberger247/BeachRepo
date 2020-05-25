import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaBeer, FaHiking } from "react-icons/fa";

export default class Service extends Component {
  state = {
    services: [
      { icon: <FaCocktail />, title: "Free Cocktails", info: "Drink Away Here" },
      { icon: <FaBeer />, title: "Free Beer", info: "Craft Beers for the Best" },
      { icon: <FaHiking />, title: "Hiking Trails", info: "Scenic Routes" },
    ],
  };
  render() {
    return (
      <section className="services">
      
     
        <Title title="services"/>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
             
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            
            );
          })}
          </div>
       </section>
    
    );
  }
}
