import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice'

function Counter() {

	const count = useSelector((state) =>
		state.counter.value
	)

	const dispatch = useDispatch()

	return (
		<div>
			<button className='block' onClick={() => dispatch(increment())}>Increment</button>
			<div className="" >{count}</div>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	)
}

export default Counter