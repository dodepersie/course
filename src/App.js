import React, { useEffect, useRef, useState } from 'react';
import MainLayouts from './components/Layouts/main.layouts';
import Navigation from './components/Layouts/navigation.layouts';
import Home from './components/Home/main.home';
import Albums from './components/Albums/main.albums';
import Posts from './components/Posts/main.posts';
import Footer from './components/Layouts/footer.layouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/all.css'
import './style/modal.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element = {<Home />}></Route>
            <Route path="/albums" element = {<Albums title="Albums API" description="Fetching images with API, default is 3" />}></Route>
            <Route path="/posts" element = {<Posts title="Posts API" description="Posts API but GET title only, default is 3" />}></Route>
            <Route path="*" element = {<h1 className='text-center text-danger m-5'>404 Not Found</h1>}></Route>
          </Routes>
          <Footer />
        </Router>
      </MainLayouts>
    </>
  )
}

export default App
