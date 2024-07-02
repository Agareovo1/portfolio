import React from 'react'
import { logo } from "../../assets/index"
import { navLinksdata } from '../../constants'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-tittlefont border-b-[1px] border-b-gray-600'>
        <div className='flex items-center gap-2'>
            <img src={logo} alt="logo" className="w-12 h-12 rounded-full object-cover" />
            <h2 className="text-xl font-bold">INBIO</h2>
        </div>
        <div>
            <ul className='flex items-center gap-10 list-none'>
                {
                    navLinksdata.map(({ _id, title, link }) => (
                        <li key={_id} className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'>
                           <Link 
                               activeClass="active"
                               to={link}
                               spy={true}
                               smooth={true}
                               offset={-70}
                               duration={500}
                           >
                               {title}
                           </Link> 
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar
