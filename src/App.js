import React from 'react'
import Header from './components/header/Header'
import { createGlobalStyle } from 'styled-components'
import NewForm from './components/header/mainLayout/NewForm'
const App = () => {
	return (
		<>
			<Wrapper />
				<Header />
		<NewForm />
		</>
	)
}
const Wrapper = createGlobalStyle`
body{
	margin: 0 auto;
	padding: 0;
	
}
`
export default App
