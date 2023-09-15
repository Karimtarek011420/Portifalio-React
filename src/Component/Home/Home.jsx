import React, { Component } from 'react'
import logo from "./avataaars.svg";
import "./home.css";

export default class Home extends Component {
  render() {
    return <>
<section className='bg-success'>
    <div className='items d-flex justify-content-center align-items-center'>
        <div className=' text-white py-5 text-center'>
            <img src={logo} alt=""/>
            <h1 className='my-3'>START FRAMEWORK</h1>
            <i className="fa-solid fa-star icon"></i>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>

</section>

    </>
  }
}
