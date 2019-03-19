import React, { unstable_ConcurrentMode as ConcurrentMode } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
// import { Provider } from 'react-redux'

// import Nodes from './components/Nodes'
import ReactTest from './components/ReactTest'
// import store from './redux/store'
// import TableNodes from './components/TableNodes'
import './global.css'
import './App.css'

const App = () => (
	<Router>
		<div className="App">
			<nav className="App_navigation">
				<ul className="App_navigationList">
					<li className="App_navigationItem">
						<Link
							className="App_navigationLink"
							to="/react"
						>
							React
						</Link>
					</li>
					<li className="App_navigationItem">
						<Link
							className="App_navigationLink"
							to="/react-redux"
						>
							React-Redux
						</Link>
					</li>
				</ul>
			</nav>

			<div className="App_codeView">
				<Route
					component={ReactTest}
					path="/react"
				/>
			</div>
		</div>
	</Router>
)

export default App
