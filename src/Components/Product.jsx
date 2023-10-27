import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice'

function Product({ title, description, image, price, id }) {

	const { cart } = useSelector(state => state)

	const dispatch = useDispatch()

	const addToCart = () => {
		dispatch(add(post))
		toast.success("Item added to cart")
	}

	const removeFromCart = () =>{
		dispatch(remove(post))
		toast.success("Item removed from cart")
	}

	return (
		<div>
			<div className="">
				<p>{title}</p>
			</div>
			<div className="">
				<p>{description}</p>
			</div>
			<div className="">
				<img src={`${image}`} alt="" />
			</div>
			<div className="">
				<p>{price}</p>
			</div>
			{
				cart.some((p) => p.id == id) ?
					<button onClick={removeFromCart}>Remove Item</button> :
					<button onClick={addToCart}>Add to cart</button>
			}
		</div>
	)
}

export default Product