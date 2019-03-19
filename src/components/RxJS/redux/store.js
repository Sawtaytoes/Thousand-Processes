import { createEpicMiddleware } from 'redux-observable'
import { applyMiddleware, createStore } from 'redux'

import rootEpic from './rootEpic'
import rootReducer from './rootReducer'

const epicMiddleware = createEpicMiddleware()

const middleware = (
	applyMiddleware(
		epicMiddleware
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
