import React, { Component } from 'react'
import "./about.css"

export default class About extends Component {
  render() {
    return <>
    <section className='bg-success'>
    <div className='d-flex justify-content-center align-items-center btn  text-white container'>
        <div>
            <h1>ABOUT COMPONENT</h1>
            <i className="fa-solid fa-star icon py-3"></i>
            <div className=' para'>
                <p className='px-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
    </div>

    </section>


    </>
  }
}
