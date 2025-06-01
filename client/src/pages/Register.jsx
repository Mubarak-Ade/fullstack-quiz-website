import React, { useEffect, useState } from 'react'
import { LoginContainerVariant, TextScaleVariant } from '../utils/Animation/variant/IntroAnimationVariant'
import { motion } from 'framer-motion'
import Logo from '../assets/logo.png'
import { LoginButtonVariant } from '../utils/Animation/variant/HoverVariant'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../features/auth/reduxThunk'
import Loading from '../utils/Animation/loading'

const Register = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { loading, error, user } = useSelector((state) => state.auth)


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser({username, email, password }))
    }

    useEffect(() => {
        if (user) {
            navigate('/dashboard')
        }
    }, [user])
    return (
        <div className='h-screen flex flex-col justify-center items-center text-white bg-gradient-to-tr from-teal-900 to-green-900' >
            {loading && <Loading />}
            <motion.div
                variants={TextScaleVariant}
                initial='initial'
                animate='animate'
                transition={{
                    duration: 1
                }}
                className="flex items-center mt-10 mb-5 gap-5">
                <img src={Logo} alt={Logo} className='size-10' />
                <h2 className='text-3xl'>Register your account</h2>
            </motion.div>
            <motion.div
                variants={LoginContainerVariant}
                initial='initial'
                animate='animate'
                transition={{
                    duration: 1
                }}
                className="p-10 bg-slate-500/20 rounded-2xl shadow-2xl">
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <label className='' htmlFor="">Username</label>
                    <input className='p-2.5 w-100 bg-white rounded-xl text-green-900'  onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Enter your name' type="text" />
                    <label className='' htmlFor="">Email:</label>
                    <input className='p-2.5 w-100 bg-white rounded-xl text-green-900' type="email" name="" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email" id="" />
                    <label className='' htmlFor="">Password: </label>
                    <input className='p-2.5 w-100 bg-white rounded-xl text-green-900' type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter a password' name="" id="" />
                    <motion.button
                        variants={LoginButtonVariant}
                        whileHover='hover'
                        whileTap='tap'
                        className='bg-teal-950 p-2 rounded-xl cursor-pointer' type="submit">
                        Submit
                    </motion.button>
					{error && <span>{error}</span>}
                </form>
            </motion.div>
        </div>
    )
}

export default Register