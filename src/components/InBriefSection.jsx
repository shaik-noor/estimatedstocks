import React from 'react'
import {AiOutlineMinus} from 'react-icons/ai';

export default function InBriefSection() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-200/70 rounded-md py-10 mt-5">
    
    <h1 className="text-4xl font-bold text-center text-gray-900 mt-5">Estimated Stocs In Brief</h1>
    <div className="flex items-center justify-center">
    <AiOutlineMinus size={50} style={{ width: '180px' }} />
    </div>
    <p className='text-xl text-center text-gray-900 mt-5'>A Reliable and Protected Environment for Your Business"  ----  "EstimatedStocks AB is a forward-thinking business consortium in the nascent stages of pioneering healthcare technology solutions. Our commitment to growth and market leadership drives us to explore strategic acquisitions and foster organic expansion opportunities.</p>
    </div>
    </>
  )
}
