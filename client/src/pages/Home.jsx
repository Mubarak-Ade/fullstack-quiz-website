import React from 'react'
import BgImage from '../assets/images/bg_image.jpg'

const Home = () => {
    return (
        <div className={`p-5 bg-[url('/src/assets/images/bg_image.jpg')] w-full h-full bg-center bg-no-repeat bg-blue-500 bg-cover`}>
            <h2 className='text-5xl text-center'>Welcome to treevia </h2>
        </div>
    )
}

export default Home
