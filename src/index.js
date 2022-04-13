import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// import { Provider } from 'react-redux'
// import store from './store/store'
// import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))
root.render(
	// <BrowserRouter>
	// 	<Provider store={store}>
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	{
		/* </Provider>
	</BrowserRouter> */
	},
)

// ReactDOM.render(
// 	<BrowserRouter>
// 		<Provider store={store}>
// 			<React.StrictMode>
// 				<App />
// 			</React.StrictMode>
// 		</Provider>
// 	</BrowserRouter>
// 	,
// 	document.getElementById('root'),
// )
