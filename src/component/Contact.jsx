import React from 'react';
import './cssfile/Contact.css';

export default function Contact() {
    return (
        <div className="container-fluid">
            <div className="contactdiv">
                <h1>Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <h2>CONTACT INFO :</h2>
                        <hr />
                        <h2 id='h2add'>Address:</h2>
                        <span id='h2span'>H # 34 Street # 1 Usmanabad Hyderabad </span>
                        <hr />
                        <h2 id='h2add'>Registered Office:</h2>
                        <span id='h2span'>H # 34 Street # 1 Usmanabad Hyderabad </span>
                        <hr />
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <h2 id='h2add'>Phone:</h2>
                                <span id='h2span'>021-90339494 </span>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <h2 id='h2add'>Moblie:</h2>
                                <span id='h2span'>03450000000</span>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <h2 id='h2add'>Email:</h2>
                                <span id='h2span'>israraaaa@gmail.com</span>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <h2 id='h2add'>Web:</h2>
                                <span id='h2span'>www.brilliance.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <img src="./img/asset.png" alt="" id='imgasset' />
                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-7 col-lg-8">
                        <h2 id='h2add'>FEEDBACK</h2>
                        <form>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <input type="text" id="input" class="form-control" placeholder="Enter Your Full Name" />
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <input type="text" id="input" class="form-control" placeholder="Enter Your Full Name" />
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <input type="text" id="input" class="form-control" placeholder="Enter Your Full Name" />
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <textarea name="message" id="input" required placeholder="Write Your Message" cols="97"
                                        rows="10"></textarea>
                                </div>
                            </div>
                            <button id='submitbtn'>Submit</button>
                        </form>

                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-4">

                    </div>
                </div>
            </div>

        </div>
    )
}
