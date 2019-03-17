import { createEpicMiddleware } from 'redux-observable'
import { applyMiddleware, compose, createStore } from 'redux'

import rootEpic from './rootEpic'
import rootReducer from './rootReducer'

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = (
	window
	.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	|| compose
)

const middleware = (
	composeEnhancers(
		applyMiddleware(
			epicMiddleware
		)
	)
)

const store = (
	createStore(
		rootReducer,
		middleware,
	)
)

epicMiddleware
.run(rootEpic)

export default store
