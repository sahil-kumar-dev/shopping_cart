import React from 'react'
import './Spinner.css'

function Spinner() {
  return (
    <div className='w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-md flex flex-col items-center  hover:scale-110 transition duration-300 ease-in px-6'>
      <div className="font-bold text-2xl text-gray-700 py-2">
        <div className="loading-skeleton loading-skeleton-title"></div>
      </div>
      <div className="w-40 text-gray-400 text-xs">
        <div className="loading-skeleton loading-skeleton-description"></div>
      </div>
      <div className="h-[180px]">
        <div className="loading-skeleton loading-skeleton-image"></div>
      </div>
      <div className="flex justify-between w-full py-4 px-2 justify-self-end">
        <div className="bg-green-800 font-bold text-white px-2 py-0.5 rounded-3xl">
          <div className="loading-skeleton loading-skeleton-price"></div>
        </div>
        <div className="loading-skeleton loading-skeleton-button"></div>
      </div>
    </div>

  )
}

export default Spinner