import React, { useState } from 'react'
import {FaMessage} from "react-icons/fa6"

const FloatingChatButton = () => {
    const [botOpen, setBotOpen] = useState(false);

  return (
    <>
        <div onClick={() => setBotOpen(!botOpen)} className='absolute bg-theme-secondary shadow bottom-6 end-6 flex justify-center items-center p-3 rounded-full'>
            <FaMessage size={30} />
        </div>
        {botOpen && <section className='w-screen flex items-center pe-8 justify-end h-screen bg-theme-primary absolute inset-0 bg-black/50'>
            <iframe className='w-1/3 end-auto h-4/5 relative' src="https://app.gpt-trainer.com/widget/773ff7fa8a194f8fac61c5cb2c09fc4d" frameborder="0"></iframe>
            <div onClick={() => setBotOpen(!botOpen)} className='absolute bg-theme-secondary shadow bottom-6 end-6 flex justify-center items-center p-3 rounded-full'>
                <FaMessage size={30} />
            </div>
        </section>}
    </>
  )
}

export default FloatingChatButton