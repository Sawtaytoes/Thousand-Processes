import createReducer from '../../../utils/createReducer'

import { QUEUE_ACTION, RESET_QUEUE } from './actions'

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
