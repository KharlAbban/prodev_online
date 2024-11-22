import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const routeError = useRouteError();

  return (
    <div className='h-screen w-screen flex flex-col gap-8 items-center justify-center'>
        <span className='text-xl font-semibold'>🔎 Bug found 🪲</span>
        <span className='text-3xl font-ribeye'>{routeError.message}</span>
        <span className='text-xl font-semibold'>❌ Take action now ❌</span>
    </div>
  )
}

export default ErrorPage