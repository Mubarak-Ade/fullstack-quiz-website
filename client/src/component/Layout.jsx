import {Outlet, useLocation} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Loading from '../utils/Animation/loading'
import BreadCrumbs from './BreadCrumbs'

const Layout = () => {

	const location = useLocation()

	const isDashboard = location.pathname.startsWith('/admin' || '/user')

	return (
		<div className=''>
			{!isDashboard && <Navbar />}
			<main className='relative'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout