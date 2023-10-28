import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import logo from '../image/logo.png'

function Navbar() {

	const { cart } = useSelector(state => state)

	return (
		<nav className="flex justify-around items-center py-0 bg-slate-800 z-50 px-16 sticky top-0 py-1">
			<NavLink to="/">
				<img src={`${logo}`} alt="logo" width={50} className='' />
			</NavLink>

			<div className="flex text-white">
				<NavLink to="/">
					<p>Home</p>
				</NavLink>
				<NavLink to="/cart">
					<div className="relative">
						<FaShoppingCart className='text-2xl' />
						{
							cart.length > 0 &&
							<span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce text-white'>{cart.length}</span>
						}
					</div>
				</NavLink>
			</div>
		</nav>
	)
}

export default Navbar