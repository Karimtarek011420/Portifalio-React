import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Section from "../Section/Section";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default class Layout extends Component {
  render() {
    
    return (
      <>
      <Navbar/>
      <Outlet/>
      <Section/>
        <Footer/>
      </>
    );
  }
}
