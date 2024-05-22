import React from 'react'
import Homeslider from './components/Homeslider'
import Homeservices from './components/Homeservices'
import Homeabout from './components/Homeabout'
import Hometeam from './components/Hometeam'
import Hometestimonials from './components/Hometestimonials'
import Homeblog from './components/Homeblog'
function Home() {
  return (
    <div>
      <Homeslider />
      <Homeservices />
      <Homeabout />
      <Hometeam />
      <Hometestimonials />
      <Homeblog />
    </div>
  )
}

export default Home