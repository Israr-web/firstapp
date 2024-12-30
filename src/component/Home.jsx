import React from 'react';
import Slider from './Slider';
import Courses from './Courses';
import Navbar from './Navbar';
import Footer from './footer';

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Courses/>
            <Footer/>

        </div>
    )
}
