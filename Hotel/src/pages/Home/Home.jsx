import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner.jsx';
import Room from '../../components/Room/Room.jsx';
import About from '../../components/About/About.jsx';
import Facility from '../../components/Facility/Facility.jsx'
function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Room />
      <Facility />
    </div>
  )
}

export default Home
