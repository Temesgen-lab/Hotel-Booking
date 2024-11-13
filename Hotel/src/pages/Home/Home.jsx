import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner.jsx';
import Room from '../../components/Room/Room.jsx';
import About from '../../components/About/About.jsx'
function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Room />
    </div>
  )
}

export default Home
