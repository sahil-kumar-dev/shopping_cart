import React from 'react'
import {MdOutlineDelete} from 'react-icons'

function CartItem({ image, description, title, price }) {
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
						<div className="">
							<MdOutlineDelete />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem