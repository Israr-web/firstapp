import React, { useEffect } from 'react';
import './cssfile/Courses.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function Courses() {

  useEffect(()=>{
    Aos.init({duration: "1500" })
  },[])
  return (
    <div className='container'>
      <h1>OUR COURSES</h1>
      <div className="row">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div class="card bg-dark" id="procard">
            <img src="img/design.png" class="card-img-top" alt="..." id="proimg" />
            <div class="card-body">
              <h5 class="card-title text-light" id='htext'>Web Design</h5>
              <p class="card-text text-light" id='ptext'>Some quick example text to card's content.</p>
              <a href="#" class="btn btn-light">
                <i class="bi bi-cart-fill"></i> Add Cart</a>
            </div>
          </div>
        </div>
        <div className="col col-6 col-sm-4 col-md-3 col-lg-2" data-aos="flip-left">
          <div class="card bg-dark" id="procard">
            <img src="img/web-develop.jpg" class="card-img-top" alt="..." id="proimg" />
            <div class="card-body">
              <h5 class="card-title text-light" id='htext'>Web Development</h5>
              <p class="card-text text-light" id='ptext'>Some quick example text to card's content.</p>
              <a href="#" class="btn btn-light">
                <i class="bi bi-cart-fill"></i> Add Cart</a>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div class="card bg-dark" id="procard">
            <img src="img/python.png" class="card-img-top" alt="..." id="proimg" />
            <div class="card-body">
              <h5 class="card-title text-light" id='htext'>Python</h5>
              <p class="card-text text-light" id='ptext'>Some quick example text to card's content.</p>
              <a href="#" class="btn btn-light">
                <i class="bi bi-cart-fill"></i> Add Cart</a>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div class="card bg-dark" id="procard">
            <img src="img/seo.png" class="card-img-top" alt="..." id="proimg" />
            <div class="card-body">
              <h5 class="card-title text-light" id='htext'>SEO</h5>
              <p class="card-text text-light" id='ptext'>Some quick example text to card's content.</p>
              <a href="#" class="btn btn-light">
                <i class="bi bi-cart-fill"></i> Add Cart</a>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div class="card bg-dark" id="procard">
            <img src="img/laraval.png" class="card-img-top" alt="..." id="proimg" />
            <div class="card-body">
              <h5 class="card-title text-light" id='htext'>Laraval</h5>
              <p class="card-text text-light" id='ptext'>Some quick example text to card's content.</p>
              <a href="#" class="btn btn-light">
                <i class="bi bi-cart-fill"></i> Add Cart</a>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div class="card bg-dark" id="procard">
            <img src="img/shopify.png" class="card-img-top" alt="..." id="proimg" />
            <div class="card-body">
              <h5 class="card-title text-light" id='htext'>Shopify</h5>
              <p class="card-text text-light" id='ptext'>Some quick example text to card's content.</p>
              <a href="#" class="btn btn-light">
                <i class="bi bi-cart-fill"></i> Add Cart</a>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div class="card bg-dark" id="procard">
            <img src="img/wordpress.png" class="card-img-top" alt="..." id="proimg" />
            <div class="card-body">
              <h5 class="card-title text-light" id='htext'>WordPress</h5>
              <p class="card-text text-light" id='ptext'>Some quick example text to card's content.</p>
              <a href="#" class="btn btn-light">
                <i class="bi bi-cart-fill"></i> Add Cart</a>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div class="card bg-dark" id="procard">
            <img src="img/msoffice.png" class="card-img-top" alt="..." id="proimg" />
            <div class="card-body">
              <h5 class="card-title text-light" id='htext'>M S Office</h5>
              <p class="card-text text-light" id='ptext'>Some quick example text to card's content.</p>
              <a href="#" class="btn btn-light">
                <i class="bi bi-cart-fill"></i> Add Cart</a>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
