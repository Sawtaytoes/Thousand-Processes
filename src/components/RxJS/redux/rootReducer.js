import { combineReducers } from 'redux'

import nodesReducer from './nodesReducer'

const rootReducer = (
	combineReducers({
		nodes: nodesReducer,
	})
)

export default rootReducer
