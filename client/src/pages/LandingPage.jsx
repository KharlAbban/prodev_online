import React from 'react'
import { AppFeatures, MapHero } from '../components'
import { Link } from 'react-router-dom'
import { animateItemNoScroll } from '../lib/animateHelpers'

const LandingPage = () => {
  animateItemNoScroll("#landing_image", 1.5, {scale: 0.6});

  return (
    <>
      <MapHero />
      <div className="h-10 w-full bg-gradient-to-b from-theme-primary to-transparent mb-20"></div>
      <div className="max-lg:hidden w-3/4 mx-auto relative mb-[50vh]">
        <img id='landing_image' loading='lazy' src="/ghana_regions_image.png" className='w-full absolute -top-[35vh] -skew-y-6' alt="Map of Ghana and its regions" />
      </div>
      <AppFeatures />
      <div className="w-full pt-6 pb-20">
        <div className="w-3/4 mx-auto">
        <div className="flex jsutify-between items-end">
          <h3 className='font-semibold text-5xl flex-1'>Plan the present. <br />
          Build the future.</h3>
          <Link to="/shared-dashboard/regions" className='px-10 py-3 text-lg bg-theme-accent text-theme-text hover:bg-theme-accent/70 duration-200 rounded-sm'>Get Started</Link>
        </div>
        </div>
      </div>
      <footer className='w-full p-4 text-theme-secondary text-lg font-semibold bg-theme-primary flex justify-center items-center'>
        Copyright &copy; {new Date().getFullYear()} | ProDev
      </footer>
    </>
  )
}

export default LandingPage