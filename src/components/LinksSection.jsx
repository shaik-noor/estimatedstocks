import React from 'react';
import image1 from '../../src/assets/execcution.jpg'
import image2 from '../../src/assets/people.jpg'
import image3 from '../../src/assets/sustainability.jpg'
import {AiOutlineMinus} from 'react-icons/ai';
import {GoArrowRight} from 'react-icons/go';

function LinksSection() {
  return (
    <div className="bg-white-100 p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-center text-gray-900">Popular Links</h1>
          <div className="flex items-center justify-center">
            <AiOutlineMinus size={50} style={{ width: '180px' }} />
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-[100px] mt-[50px]">
            <button className="bg-blue-900 hover:bg-blue-600 text-white font-semibold py-4 px-12 rounded-full">
            Sustainability
            </button>
            <button className="bg-blue-900 hover:bg-blue-600 text-white font-semibold py-4 px-12 rounded-full">
              Contact
            </button>
            <button className="bg-blue-900 hover:bg-blue-600 text-white font-semibold py-4 px-12 rounded-full">
              Career
            </button>
          </div>

          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5">
            Key themes for creating long-term value
          </h2>
          <div className="flex items-center justify-center">
            <AiOutlineMinus size={50} style={{ width: '200px'}} />
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className=" hover:shadow-xl relative hover:cursor-pointer">
              <div className="relative w-full h-[400px]">
                <img src={image2} alt="Image 1" className="w-full h-[300px] object-cover rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-600/70 mt-[180px] text-white p-4 rounded-lg">
                  <div className="text-center">
                    <h2 className="text-3xl font-semibold">People</h2>
                    <div className="flex items-center justify-center">
                    <AiOutlineMinus size={40} />
                    </div>
                    <p className="text-xl">
                    We are convinced that top quality individuals with different mindsets make all the difference
                    </p>
                    <div className="flex items-center justify-center">
                    <GoArrowRight size={30} className='mt-4 mb-3'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className=" hover:shadow-xl relative hover:cursor-pointer">
              <div className="relative w-full h-[400px]">
                <img src={image1} alt="Image 1" className="w-full h-[300px] object-cover rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-600/70 mt-[180px] text-white p-4 rounded-lg">
                  <div className="text-center">
                    <h2 className="text-3xl font-semibold">Execution</h2>
                    <div className="flex items-center justify-center">
                    <AiOutlineMinus size={40} />
                    </div>
                    <p className="text-xl">
                      We foster a spirit of agility, speed, and getting things done
                    </p>
                    <div className="flex items-center justify-center">
                    <GoArrowRight size={30} className='mt-4 mb-3'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className=" hover:shadow-xl relative hover:cursor-pointer">
              <div className="relative w-full h-[400px]">
                <img src={image3} alt="Image 1" className="w-full h-[300px] object-cover rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-600/70 mt-[180px] text-white p-4 rounded-lg">
                  <div className="text-center">
                    <h2 className="text-3xl font-semibold">Sustainability</h2>
                    <div className="flex items-center justify-center">
                    <AiOutlineMinus size={40} />
                    </div>
                    <p className="text-xl">
                    We strive to be a leader in  sustainable business practices
                    </p>
                    <div className="flex items-center justify-center">
                    <GoArrowRight size={30} className='mt-4 mb-3'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinksSection;
