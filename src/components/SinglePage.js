import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const SinglePage = () => {
	const { id } = useParams()

	const navigate = useNavigate()

	const goBack = () => navigate(-1)

	const todoList = useSelector((state) => state.todos.todoList)
	const [todo, setTodo] = useState({})

	useEffect(() => {
		const currentElem = todoList.find((item) => item.id === Number(id))
		setTodo(currentElem)
	}, [id])
	return (
		<div>
			<button onClick={goBack}>go back</button>
			<>{todo && <h1>{todo.text}</h1>}</>
            {/* {todo.text} */}
		</div>
	)
}

export default SinglePage
