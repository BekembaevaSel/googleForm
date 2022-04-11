import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../store/TodoSlice'
import TodoList from './TodoList'
import './TodoForm.css'
import { useNavigate } from 'react-router-dom'

const TodoForm = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const goBack = () => navigate('/')

	const [input, setInput] = useState('')

	const addTodoHandler = (e) => {
		e.preventDefault()
		dispatch(
			saveTodo({
				text: input,
				completed: false,
				id: Date.now(),
			}),
		)
		setInput('')
	}
	return (
		<>
			<button onClick={goBack}>НАЗАД</button>
			<form>
				<input
					type='text'
					placeholder='type here...'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button onClick={addTodoHandler}>ADD</button>
				<div>
					<TodoList />
				</div>
			</form>
		</>
	)
}

export default TodoForm
