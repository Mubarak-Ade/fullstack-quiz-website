import React from 'react'
import BgImage from '../assets/images/bg_image.jpg'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div className={`p-5 w-full h-screen flex items-center justify-center-safe gap-4 flex-col bg-gradient-to-tr from-green-200 via-teal-500 to-teal-100 bg-cover`}>
            <h1 className='text-5xl text-center text-green-900 font-montserrat font-bold'>Welcome to Treevia </h1>
            <h2 className='text-4xl text-center text-green-900 font-lora font-semibold'>Test Your Knowledge </h2>
            <motion.button 
                 whileHover={{
                    backgroundColor: 'var(--color-text-green-900)',
                    color: 'var(--color-green-900)',
                    border: '1px solid var(--color-green-900)'
                }}
                whileTap={{
                    scale: .9
                }}
            className="text-xl bg-green-900 w-36 h-12 text-white rounded cursor-pointer">Start Quiz</motion.button>
        </div>
    )
}

export default Home
