import { Route, Routes } from 'react-router-dom'
import './App.css'
import TodoForm from './components/TodoForm'
import WelcomePage from './components/WelcomePage'
import { useSelector } from 'react-redux'
import SinglePage from './components/SinglePage'
function App() {
	const todoList = useSelector((state) => state.todos.todoList)

	return (
		<Routes>
			<Route path='/' element={<WelcomePage />} />
			<Route path='/todo' element={<TodoForm  />} />
			<Route
				path='todo/:id'
				element={<SinglePage/>}
			/>
		</Routes>
	)
}

export default App
