import React, { Component } from "react";
import "./portfolio.css";
import image1 from "./poert1.png";
import image2 from "./port2.png";
import image3 from "./port3.png";
export default class Portfolio extends Component {
  render() {
    return (
      <>
        <section>
          <div className="portfolio">
            <div className="text-center py-4">
              <h1>PORTFOLIO COMPONENT</h1>
              <i className="fa-solid fa-star ico"></i>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="iteming">
                    <img src={image1} alt="" className="w-100" />
                    <div className="bg-danger  plus d-flex justify-content-center align-items-center">
                      <i class="fa-solid fa-plus plusicon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
