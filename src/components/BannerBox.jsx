import React from 'react'
import {GoArrowRight} from 'react-icons/go'

export default function BannerBox() {
  return (
    <div id="about" className="max-w-[1200px] mx-auto w-full h-full flex flex-col lg:flex-row mt-11 hover:cursor-pointer">
                <div className="flex-1 relative p-4">
                    <div className="p-4 rounded-lg text-center bg-pink-300/90 hover:opacity-90">
                        <h3 className="text-2xl font-bold text-white">Interim Report</h3>
                        <div className="flex items-center justify-center">
                    <GoArrowRight size={30} className='mt-4 mb-3'/>
                    </div>
                    </div>
                </div>
                <div className="flex-1 relative p-4">
                    <div className=" p-4 rounded-lg text-center bg-yellow-700/80 hover:opacity-90">
                        <h3 className="text-2xl font-bold text-white">Annual Report</h3>
                        <div className="flex items-center justify-center">
                    <GoArrowRight size={30} className='mt-4 mb-3'/>
                    </div>
                    </div>
                </div>
                <div className="flex-1 relative p-4">
                    <div className="p-4 rounded-lg text-center bg-blue-700/90 hover:opacity-90">
                        <h3 className="text-2xl font-bold text-white">Estimated Stocks</h3>
                        <div className="flex items-center justify-center">
                    <GoArrowRight size={30} className='mt-4 mb-3'/>
                    </div>
                        
                    </div>
                </div>

                
            </div>
  )
}
