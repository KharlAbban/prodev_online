import React from 'react'
import { Link } from 'react-router-dom'
import { animateItemNoScroll } from '../lib/animateHelpers'

const MapHero = () => {
  animateItemNoScroll("#welcome_text");
  animateItemNoScroll("#welcome_link");
  animateItemNoScroll("#welcome_sub_text", 0.5);

  return (
    <header className='w-full h-[100vh] bg-theme-primary text-gray-50 relative flex flex-col justify-center items-center'>
      <h1 className='absolute top-4 start-4 text-theme-secondary text-3xl font-bold'>ProDev</h1>
      <p className='text-center text-sm italic text-gray-400 animate-pulse'>From ProDev:</p>
      <div className="mb-10 flex flex-col gap-6 items-center">
        <h1 id='welcome_text' className='text-center font-bold text-7xl'>
          Welcome to <br /> Sustainability Insights
        </h1>
        <h2 className='font-thin text-lg' id='welcome_sub_text'>Explore regional and district sustainability data to make your next big decision</h2>
      </div>
      <Link id='welcome_link' to="/shared-dashboard/regions" className='bg-theme-accent block hover:bg-theme-accent/80 duration-200 text-theme-text px-6 shadow-sm py-2 rounded-sm font-medium'>Explore Now</Link>
    </header>
  )
}

export default MapHero