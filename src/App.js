import React, { unstable_ConcurrentMode as ConcurrentMode } from 'react'
import { Provider } from 'react-redux'

import Nodes from './components/Nodes'
import store from './redux/store'
import './App.css'

const App = () => (
	<ConcurrentMode>
		<div className="App">
			<Provider store={store}>
				<Nodes />
			</Provider>
		</div>
	</ConcurrentMode>
)

export default App
