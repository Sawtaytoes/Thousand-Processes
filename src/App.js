import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import ReactChildren from './components/ReactChildren'
import ReactParent from './components/ReactParent'
import ReactRedux from './components/ReactRedux'
import ReactReduxCheat from './components/ReactReduxCheat'
import ReduxObservable from './components/ReduxObservable'
import RxJS from './components/RxJS'
import VanillaJS from './components/VanillaJS'
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
					<li className="App_navigationItem">
						<Link
							className="App_navigationLink"
							to="/react-redux-cheat"
						>
							React-Redux Cheat
						</Link>
					</li>
					<li className="App_navigationItem">
						<Link
							className="App_navigationLink"
							to="/redux-observable"
						>
							Redux-Observable
						</Link>
					</li>
					<li className="App_navigationItem">
						<Link
							className="App_navigationLink"
							to="/rxjs"
						>
							RxJS
						</Link>
					</li>
					<li className="App_navigationItem">
						<Link
							className="App_navigationLink"
							to="/vanillajs"
						>
							VanillaJS
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

				<Route
					component={ReactReduxCheat}
					path="/react-redux-cheat"
				/>

				<Route
					component={ReduxObservable}
					path="/redux-observable"
				/>

				<Route
					component={RxJS}
					path="/rxjs"
				/>

				<Route
					component={VanillaJS}
					path="/vanillajs"
				/>
			</div>
		</div>
	</Router>
)

export default App
