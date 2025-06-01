import { animate, motion } from 'framer-motion';
import React from 'react'
import Logo from '../../assets/logo.png'
import { bouncingDotVariant, dotTransition } from './variant/loadingVariant';
const Loading = () => {

	return (
		<div className='h-screen fixed bg-teal-800/20 z-50 inset-0 flex flex-col items-center justify-center gap-15'>
			<div className="flex flex-col gap-5">
				{/* {[0, 0.2, 0.4, 0.6].map((delay, i) => (
					<motion.span
					key={i}
					variants={bouncingDotVariant}
					animate='animate'
					transition={{
						...dotTransition, delay
					}}
					className='bg-teal-500 size-5 rounded-full' />
					))
					
					} */}
				<div className="relative size-30">
					<motion.img
						initial={{
							scale: 0.7
						}}
						animate={{
							scale: 1
						}}
						transition={{
							repeat: Infinity,
							ease: "easeInOut",
							duration: 1
						}}
						src={Logo} alt={Logo} className='size-15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-full' />
					<motion.svg
						className='size-30 text-teal-500 absolute inset-0'
						viewBox='0 0 50 50'
						fill='none'
						stroke="currentColor"
						strokeWidth="3"
						initial={{
							rotate: 0
						}}
						animate={{
							rotate: 360
						}}
						transition={{
							repeat: Infinity,
							ease: "linear",
							duration: 1
						}}
					>
						<circle
							cx="25"
							cy="25"
							strokeOpacity="0.3"
						/>
						<motion.circle
							cx='25'
							cy='25'
							r='20'
							stroke='currentColor'
							strokeDasharray="90"
							strokeDashoffset="60"
							strokeLinecap="round"
						/>
					</motion.svg>
				</div>
			</div>
		</div>
	)
}

export default Loading;