import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const PrivateRoute = ({children}) => {

	const user = useSelector((state) => state.auth.user)
	const navigate = useNavigate()

	useEffect(() => {
		JSON.parse(localStorage.getItem('user'))
	}, []);	

	return ( user ? children : navigate('/login') )
}

export default PrivateRoute
