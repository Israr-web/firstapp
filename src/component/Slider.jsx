import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssfile/Slider.css';

export default function Slider() {
  return (
    <div class="container-fluid">
        	<div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active" data-bs-interval="3000">
					<img src="img/class.jpg" class="d-block w-100" alt="..." id='imgslider'/>
				</div>
				<div class="carousel-item" data-bs-interval="5000">
					<img src="img/class2.jpg" class="d-block w-100" alt="..." id='imgslider'/>
				</div>
				<div class="carousel-item"  data-bs-interval="1000">
					<img src="img/class3.jpg" class="d-block w-100" alt="..." id='imgslider'/>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
				data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
				data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
    </div>
  )
}
