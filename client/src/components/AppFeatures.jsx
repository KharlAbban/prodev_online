import React from 'react'

const AppFeatures = () => {
  return (
    <section className='w-full py-20'>
      <div className="container w-3/4 mx-auto">
        <header className='grid mb-10 grid-cols-2'>
          <div>
            <h2 className='font-semibold text-6xl'>Made for <span className='italic'>modern</span> <br />Decision makers</h2>
          </div>
          <div className='flex justify-center items-center'>
            <p className="max-w-md">Empowering forward-thinking decision-makers with data-driven insights and innovative tools. Simplify complex challenges, optimize sustainability, and make impactful choices with confidence in today’s fast-evolving world.</p>
          </div>
        </header>
        <main className='py-2 grid grid-cols-3 gap-4 text-theme-secondary'>
          <div className="p-2">
            <article className="bg-[url('/interactive_map_bg.jpg')] bg-cover rounded-sm w-full shadow p-2 relative h-96">
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="absolute bottom-4 start-4 text-xl font-semibold">
                Interactive Map
              </div>
            </article>
          </div>
          <div className="p-2">
            <article className="bg-[url('/insights_bg.jpg')] bg-cover rounded-sm w-full shadow p-2 relative h-96">
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="absolute bottom-4 start-4 text-xl font-semibold">
                Detailed Insights
              </div>
            </article>
          </div>
          <div className="p-2">
            <article className="bg-[url('/custom_dashboard_bg.jpg')] bg-cover rounded-sm w-full shadow p-2 relative h-96">
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="absolute bottom-4 start-4 text-xl font-semibold">
                Customized Persona Dashboards
              </div>
            </article>
          </div>
        </main>
      </div>
    </section>
  )
}

export default AppFeatures