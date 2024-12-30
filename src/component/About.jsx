import React from 'react';
import './cssfile/About.css';
import Navbar from './Navbar';
import Footer from './footer';

export default function About() {
    return (
        <>
        <Navbar/>
            <div className="container-fluid">
                <div id="header">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="container">


                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <h3 id='abouth3'>We are in the business of hosting great ideas.</h3>
                        <p id='aboutp'>
                            Gexton Education is a mission driven, IT imparting institute that visions to establish one of the finest and industry oriented training and development courses of almost every meaningful contribution to Computer Science.
                            <br /><br /><span id='aboutspan'> GEXTON has been known for its ultra-quality deliverance for over a decade in various corporate IT and other business solutions, which now embarks to launch its indispensible and goal oriented Education Division to deliver beyond expectations contributing to establish winning man power of advanced technologies. Gexton Education will go an extra mile and mimic those potentials of information technology tools that were never touched, infusing the advanced learning of every major segment of IT building blocks, from Web and Apps Development, SEO and Online Marketing Strategies to institutionalizing Information Security parameters to initiate parallel combat towards upcoming technology challenges.</span>
                        </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <img src="./img/asset.png" alt="" id='aboutimg' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <h3 id='abouth31'>Our Vision</h3>
                        <p id='aboutp'>
                            To be a center of excellence in education and research to produce globally competent professional minds with human values and ethics to serve the society by taking part in industrial, technological, innovation, academic and entrepreneurship activities within the country and abroad.
                            <br /><br /><span id='aboutspan'> Gexton Education will become a premier student-centric technological training institution, focusing on six “foundational pillars,” areas of true societal need where Gexton possesses significant depth and expertise: artificial intelligence, Mobile App Solutions, cybersecurity; data science and information systems.As our education and training capacity grows in these areas, so will our influence.</span>
                        </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <h3 id='abouth32'>Our Mission</h3>
                        <p id='aboutp'>
                            To inspire, nurture and educate leaders in tomorrows technology-centric environment while contributing to the solution of the most challenging problems of our time. We are committed towards knowledge creation and its exchange with the society through teaching, learning, and research. We aim at enhancing the potential of our students and employees by adhering to our core values.
                            Key Mission Statement
                        </p>
                        <ul>
                            <li>To impart quality education to achieve excellence in teaching-learning and research.</li>
                            <li>To provide skill-oriented training to meet the need of the industry and society</li>
                            <li>To undertake collaborative projects with academia and industries</li>
                        </ul>
                    </div>
                </div>
            </div >
            <Footer/>
        </>
    )
}
