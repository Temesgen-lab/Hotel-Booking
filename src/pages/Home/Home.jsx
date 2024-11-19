import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Room from '../../components/Room/Room.jsx';
import About from '../../components/About/About.jsx';
import Facility from '../../components/Facility/Facility.jsx'
import Testimonal from '../../components/Testimonials/Testimonal.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Footer from '../../components/Footer/Footer.jsx'
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Room />
      <Facility />
      <Testimonal />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
