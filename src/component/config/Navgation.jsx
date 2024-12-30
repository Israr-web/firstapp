import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home';
import About from '../About';
import Footer from '../footer';
import Courses from '../Courses';
import Gallery from '../Gallery';
import OnlineAdd from '../OnlineAdd';
import Contact from '../Contact';
import LoginPage from '../Login';
import Register from '../Register';




export default function Navgation() {
  return (
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<Register/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About />} />
    <Route path="/footer" element={<Footer />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/onlineAdd" element={<OnlineAdd />} />
    <Route path="/contact" element={<Contact />} />
    {/* <Route path="/contact" element={<Contact />} /> */}
  </Routes>
  )
}
