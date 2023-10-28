import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {toast} from 'react-toastify'
import { remove } from '../redux/slices/CartSlice'

function CartItem({ image, description, title, price,id }) {
	const dispatch = useDispatch()

	const removeFromCart =() =>{
		dispatch(remove(id))
		toast.success("Item removed.")
	}
	return (
		<div>
			<div className="">
				<div className="">
					<img src={image} alt="" />
				</div>
				<div className="">
					<h1>{title}</h1>
					<p>{description}</p>
					<div className="">
						<p>{price}</p>
						<button className="" onClick={removeFromCart}>
							<AiFillDelete />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem