import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const TodoList = ({ id }) => {
	const todoList = useSelector((state) => state.todos.todoList)

	// const dispatch = useDispatch()
	// const deleteHandler = () => {
	// 	dispatch(deleteTodo(id))
	// }
	return (
		<div>
			{todoList.map((item) => (
				<Link key={item.id} to={`/todo/${item.id}`}>
					<p>{item.text}</p>
					<button>details</button>
					{/* <button onClick={deleteHandler}>delete</button> */}
				</Link>
			))}
		</div>
	)
}

export default TodoList
