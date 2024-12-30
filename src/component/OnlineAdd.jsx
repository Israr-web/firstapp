import React from 'react';
import './cssfile/Addmiss.css';
import Navbar from './Navbar';
import Footer from './footer';

export default function OnlineAdd() {
    return (
        <>
        <Navbar/>
        <div className="container-fluid">
            <div className="header">
                <h1>ONLINE ADDMISSION</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <h2>Fill Your Details Below</h2>
                        <form>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-group">
                                        <label for="name">Name *</label>
                                        <input type="text" id="name" class="form-control" placeholder="Enter Your Full Name" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-group">
                                        <label for="name">Father Name *</label>
                                        <input type="text" id="name" class="form-control" placeholder="Enter Your Father Name" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-group">
                                        <label for="name">Email *</label>
                                        <input type="email" id="name" class="form-control" placeholder="Enter Your Email" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-group">
                                        <label for="name">Phone *</label>
                                        <input type="number" id="name" class="form-control" placeholder="Enter Your Phone Number" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group">
                                        <label for="name">Phone *</label>
                                        <textarea name="message" required placeholder="Write Your Message" cols="70"
                                            rows="5"></textarea>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-group">
                                        <label for="name">Education *</label>
                                        <input type="email" id="name" class="form-control" placeholder="Enter Your Email" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className="form-group">
                                        <label for="name">Course Interested *</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected disabled>Select Courses </option>
                                            <option value="1">Web Desgin</option>
                                            <option value="2">Web Development</option>
                                            <option value="3">Python</option>
                                            <option value="3">Seo</option>
                                            <option value="3">laraval</option>
                                            <option value="3">Wordpress</option>
                                            <option value="3">Ms office</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group">
                                        <label for="name">Reference *</label>
                                        <input type="email" id="name" class="form-control" placeholder="Reference" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group">
                                        <label for="name">Fee Pay *</label><br />
                                        <input type="radio" name="fav_language" />
                                        <label for="html" id="pay">Pay Later via Bank or Easy Paisa Mobile</label><br />
                                        <input type="radio" name="fav_language" />
                                        <label for="css" id="onpay">Pay Online using EasyPay</label><br />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group">
                                        <label for="name">Amount to Pay *</label>
                                        <input type="email" id="name" class="form-control" placeholder="Enter your Amount" />
                                    </div>
                                </div>

                                <button type='submit' id='submit'>SUBMIT</button>
                            </div>
                        </form>

                    </div>
                    <div className="col-12 col-sm-12 -col-md-12 col-lg-6">
                        <h2>Account Details</h2>
                        <hr />
                        <div className="row">
                            <div className="col-12 col-sm-12 -col-md-12 col-lg-12">
                                <h3 id='h3'>Admission Fee: Rs.3000/-</h3>
                                <h3 id='h31'><span>To Be deposit into Bank account or EasyPaisa Account.</span></h3>
                                <hr />
                            </div>
                            <div className="col-12 col-sm-12 -col-md-12 col-lg-12">
                                <h3 id='h3'>Bank Al habib Ltd</h3>
                                <h3 id='h31'>Account Title: <span>Muhammad Israr</span></h3>
                                <h3 id='h31'>Account#: <span>1139-0981-0000000-01-1</span></h3>
                                <h3 id='h31'>IBAN: <span>PK1139AL0981-0000000-01-1</span></h3>
                                <h3 id='h31'>Branch Info: <span>Timmber Market Branch Hyderabad</span></h3>
                                <hr />
                            </div>
                            <div className="col-12 col-sm-12 -col-md-12 col-lg-12">
                                <h3 id='h3'>Easy Paisa Account#: 0346 000000</h3>
                                <hr />
                            </div>
                            <div className="col-12 col-sm-12 -col-md-12 col-lg-12">
                                <h3 id='h3last'>After payment send a confirmation message (Deposit Slip or Screenshot) on whatsapp: 0334-0000000</h3>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
