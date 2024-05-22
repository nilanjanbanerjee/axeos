import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Home from './Home'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Blog from './Blog'
import Contact from './Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import BlogDetails from './BlogDetails';



function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Services' element={<Services/>} />
      <Route path='/Portfolio' element={<Portfolio/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/BlogDetails' element={<BlogDetails/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>  
    <Footer />
    </BrowserRouter>  
    </>
  )
}

export default App
