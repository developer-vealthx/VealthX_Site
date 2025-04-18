import React, { useEffect } from 'react'
import CustomerRoute from './Routers/CustomerRoute.jsx'
import Navbar from './components/Navigation/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
// import Lenis from 'lenis'

const App = () => {

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   // Listen for the scroll event and log the event data

  //   // Use requestAnimationFrame to continuously update the scroll
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // });


  return (
    <>
      <Navbar />
      <CustomerRoute />
      <Footer />
    </>
  )
}

export default App