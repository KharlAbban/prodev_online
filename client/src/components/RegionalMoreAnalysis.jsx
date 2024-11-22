import React from 'react'
import { useRegionContext } from '../contexts/RegionProvider'
import { normalizeRegionName } from '../lib/regionInsights';
import { IoMdClose } from 'react-icons/io';

const RegionalMoreAnalysis = ({regionInsights}) => {
    const {selectedRegion} = useRegionContext();

    if (!selectedRegion) return;

  return (
    <dialog id="regionalAnalysis" className="modal p-2 absolute flex items-center justify-center inset-0 h-screen w-screen">
        <div className="modal-box relative h-full w-full flex-1 bg-gray-50 rounded p-4">
            <header className='flex items-start justify-between'>
                <h3 className="font-bold text-xl underline">More Analysis for <span className='capitalize'>{normalizeRegionName(selectedRegion)}</span></h3>
                <div className="modal-action p-0 m-0">
                    <button onClick={() => document.querySelector('#regionalAnalysis').close()} className='bg-theme-secondary p-1 rounded hover:bg-theme-primary duration-100'><IoMdClose size={25} /></button>
                </div>
            </header>
            <hr />
            <main className='w-full p-1'>
                {JSON.stringify(regionInsights)}
            </main>
        </div>
    </dialog>
  )
}

export default RegionalMoreAnalysis