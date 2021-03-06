import { combineReducers } from 'redux'

import nodesReducer from './nodesReducer'
import queueReducer from './queueReducer'

const rootReducer = (
	combineReducers({
		nodes: nodesReducer,
		queue: queueReducer,
	})
)

export default rootReducer
