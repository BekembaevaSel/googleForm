import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
	const navigate = useNavigate()
	return (
		<div>
			<h1>Добро Пожаловать!</h1>
			<button onClick={() => navigate('/todo', { replace: true })}>
				ВОЙТИ
			</button>
		</div>
	)
}

export default WelcomePage
