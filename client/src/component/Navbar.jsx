import React from 'react'
import * as Fa from 'react-icons/fa6'

const Navbar = () => {
    return (
        <div className='bg-teal-900 w-full p-5 flex justify-between items-center'>
            <h1 className='text-white text-4xl'>Treevia</h1>
            <span className='text-3xl text-white'>
                <Fa.FaBars />
            </span>
        </div>
    )
}

export default Navbar
