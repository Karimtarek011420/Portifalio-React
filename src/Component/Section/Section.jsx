import React, { Component } from 'react'

export default class Section extends Component {
  render() {
    return <div>
      <section className='bg-dark h-25'>
        <div className="container text-center py-5 text-white">
          <div className="row">
            <div className="col-md-4 my-4">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 my-4 ">
            <h2>AROUND THE WEB</h2>
            <div className='icons d-flex justify-content-center align-items-center'>
              <div className='border border-white rounded-circle mx-2'>
              <i className="fa-brands fa-instagram p-2"></i>
              </div>
              <div className='border border-white rounded-circle mx-2'>
              <i className="fa-brands fa-facebook p-2"></i>
              </div>
              <div className='border border-white rounded-circle mx-2'>
              <i className="fa-brands fa-github p-2"></i>
              </div>
              <div className='border border-white rounded-circle mx-2'>
              <i className="fa-brands fa-twitter p-2"></i>
              </div>
            </div>
            </div>
            <div className="col-md-4 my-4">
              <h2>ABOUT FREELANCER</h2>
              <p>Freelance is a free to use
                , licensed Bootstrap theme created by Route</p>
              
            </div>

          </div>

        </div>

      </section>
        
      </div>
    
  }
}
