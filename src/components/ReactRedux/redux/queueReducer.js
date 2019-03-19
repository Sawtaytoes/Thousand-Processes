import createReducer from '../../../utils/createReducer'

import { RESET_QUEUE, QUEUE_ACTION } from './actions'

const initialState = []

const reducerActions = {
	[RESET_QUEUE]: () => (
		initialState
	),
	[QUEUE_ACTION]: (
		actions,
		{ action },
	) => (
		actions
		.concat(action)
	),
}

const queueReducer = (
	createReducer(
		reducerActions,
		initialState,
	)
)

export default queueReducer
