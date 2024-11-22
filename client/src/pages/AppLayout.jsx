import React from 'react'
import RegionProvider from '../contexts/RegionProvider'
import DistrictProvider from '../contexts/DistrictProvider'
import { Outlet } from 'react-router-dom'
import { FloatingChatButton, NavBar } from '../components'

const AppLayout = () => {
  return (
    <RegionProvider>
      <DistrictProvider>
        <div className='h-screen w-full flex flex-col'>
            
            <NavBar />

            <Outlet />

            <FloatingChatButton />

        </div>
      </DistrictProvider>
    </RegionProvider>
  )
}

export default AppLayout