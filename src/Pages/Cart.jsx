import React, { useEffect , useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../Components/CartItem'

function Cart() {

	const { cart } = useSelector(state => state)
	const [totalAmount, settotalAmount] = useState(0)

	useEffect(() => {
	  settotalAmount(cart.reduce((acc,curr) => acc + curr.price,0))
	}, [cart])
	

	return (
		<div>
			{
				cart.length > 0 ?
					(<div>
						<div className="">
							{
								cart.map((item, index) => {
									return <CartItem key={item.id} {...item} />
								})
							}
						</div>
						<div className="">
							<div className="">
								<h2>Your cart</h2>
								<p>Summary</p>
								<p><span>Total items: {cart.length}</span></p>
							</div>
							<div className="">
								<p>Total Amount: {totalAmount}</p>
								<button>Checkout Now</button>
							</div>
						</div>
					</div>) :
					(<div>
						<h1>Cart Empty</h1>
						<Link to={'/'}><button>Shop Now</button></Link>
					</div>)
			}
		</div>
	)
}

export default Cart