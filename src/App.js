import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import ReactChildren from './components/ReactChildren'
import ReactParent from './components/ReactParent'
import ReactRedux from './components/ReactRedux'
import './App.css'
import './global.css'

const App = () => (
	<Router>
		<div className="App">
			<nav className="App_navigation">
				<ul className="App_navigationList">
					<li className="App_navigationItem">
						<Link
							className="App_navigationLink"
							to="/react-children"
						>
							React Children
						</Link>
					</li>
					<li className="App_navigationItem">
						<Link
							className="App_navigationLink"
							to="/react-parent"
						>
							React Parent
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
					component={ReactParent}
					path="/react-parent"
				/>

				<Route
					component={ReactChildren}
					path="/react-children"
				/>

				<Route
					component={ReactRedux}
					path="/react-redux"
				/>
			</div>
		</div>
	</Router>
)

export default App
