import React from 'react'

const ScoreInfo = () => {
  return (
    <>
      <section id='ovr-score-legend'>
        <h2 className='font-semibold text-lg'>Sustainability Index Score</h2>
        <p className='text-sm text-gray-500'>Click on a region to see performance details</p>
        <div className="flex flex-col gap-1 mt-4">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-score-excellent"></span>
            <span>80+</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-score-good"></span>
            <span>61 - 79</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-score-average"></span>
            <span>41-60</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-score-poor"></span>
            <span>21-40</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-score-critical"></span>
            <span>0-20</span>
          </div>
        </div>
      </section>
      <hr className='opacity-80 my-4' />
      <section>
        <h2 className='font-semibold text-lg'>Page Description</h2>
        <p className="mt-2 text-sm indent-4">
          This page shows the overall sustainability score for the various regions of Ghana. Use the map to visually understand how sustainable a region is. Click and interact with the map and various regions to view more detailed insights.
        </p> <br />
        <p className="text-sm indent-4">The results are tested against recognised international benchmarks from the UN, ILO, and others.</p>
      </section>
      <hr className='opacity-80 my-4' />
      <section>
        <h2 className='font-semibold text-lg'>Indicators Used</h2>
        <div className="flex flex-col gap-1 mt-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-theme-primary"></span>
            <span className='italic'>Population & Urbanization</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-theme-primary"></span>
            <span className='italic'>Jobs & Economy</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-theme-primary"></span>
            <span className='italic'>Health</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-theme-primary"></span>
            <span className='italic'>Security</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-theme-primary"></span>
            <span className='italic'>Education</span>
          </div>
        </div>
      </section>
    </>
)
}

export default ScoreInfo