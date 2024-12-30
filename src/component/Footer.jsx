import React from 'react';
import './cssfile/Footer.css';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const naviagte = useNavigate();

    const goContact = () =>{
        naviagte("/onlineAdd");
    }
    return (
        <div className="container-fluid">
            <div className="divfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <h4 id='footh1'>ABOUT US</h4>
                            <p>Gexton Education is a mission driven, IT imparting institute that visions to establish one of the finest and industry oriented training and development courses of almost every meaningful contribution to Computer Science.</p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <h4 id='footh1'>CONNECT WITH US</h4>
                            <button id='btnicon'>F</button>
                            <button id='btnicon'>W</button>
                            <button id='btnicon'>P</button>
                            <button id='btnicon'>I</button>

                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <h4 id='footh1'>CONTACT</h4>
                            <h4>+92 344 0000000</h4>
                            <h4>+92 346 0000000</h4>
                            <h4>israr00000a@gmail.com</h4>

                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <h4 id='footh1'>WORKING HOURS</h4>
                            <h4 id='daytime'>Monday - Friday <span>9:00am - 9:00pm</span></h4>
                            <h4 id='daytimesa'>Saturday <span>10:00am - 7:00pm</span></h4>
                            <h4 id='daytimesun'>Sunday <span><button id='btncl' onClick={goContact}>Closed</button></span></h4>


                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
