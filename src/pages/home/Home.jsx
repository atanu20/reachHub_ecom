import React from 'react'
import Slider from '../../component/slider/Slider'
import './Home.css'
import CardList from '../../component/cardlist/CardList'
import { useEffect } from 'react'
const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
    
    <div className="hero">
      <div className="hero_in">
      <div>
      <Slider/>
      </div>
     <div>
     <CardList/>
     </div>
      </div>
    </div>
    </>
  )
}

export default Home