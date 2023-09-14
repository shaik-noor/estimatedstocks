import {AiOutlineBars} from 'react-icons/ai'
import {useState} from 'react'

const NavBar = () =>{

    const [nav, setNav] = useState(false)

    const handlNav = () => {
        setNav(!nav);
    }

    return(
        <>
        <div>
        <div className='w-full min-h-[50px] flex justify-between absolute z-10 item-center text-white bg-gray-700/60 shadow-lg'>
        <h1 className='p-4 text-2xl font-bold'>Estimated Stocks</h1>
            <ul className='hidden sm:flex px-4'>
                <li className='p-4 text-xl'><a href="#home">Home</a></li>
                <li className='p-4 text-xl'><a href="#about">About Us</a></li>
                <li className='p-4 text-xl'><a href="#contact">Contact Us</a></li>
            </ul>
            
            
            <div onClick={handlNav} className='sm:hidden z-10'>
            <AiOutlineBars size={30} className='m-4 cursor-pointer'/>
            </div>
            <div 
            className={nav
                ? ' font-bold overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 right-0 top-[60px] w-[100%] h-[80vh] bg-black/90 px-4 py-7'
                : 'absolute hidden w-full h-screen ease-in duration-300'}>
                <ul className='w-full h-full text-center pt-6'>
                <li className='p-4 text-2xl py-8'><a href="#home">Home</a></li>
                <li className='p-4 text-2xl py-8'><a href="#about">About Us</a></li>
                <li className='p-4 text-2xl py-8'><a href="#contact">Contact Us</a></li>
                </ul>
                </div>
        </div>
        </div>
        </>
    );
}

export default NavBar;