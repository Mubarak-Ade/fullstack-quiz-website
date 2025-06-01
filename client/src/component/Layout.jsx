import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Loading from '../utils/Animation/loading'

const Layout = () => {
	return (
		<div className=''>
			<Navbar />
			<main className='relative'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout