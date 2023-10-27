import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner'
import Product from '../Components/Product'

function Home() {

	const API_URL = "https://fakestoreapi.com/products"

	const [loading, setloading] = useState(false)
	const [posts, setposts] = useState([])

	async function fetchProductData() {
		setloading(true)

		try {
			const res = await fetch(API_URL)
			const data = await res.json()

			setposts(data)
		} catch (error) {
			console.log("Error");
			setposts([])
		}
		setloading(false)
	}


	useEffect(() => {
		fetchProductData()
	}, [])
	return (
		<div className="">
			(
			{
				loading ? <Spinner /> : posts.map(post => <Product key={post.id} {...post} />)
			}
			)
		</div>
	)
}

export default Home