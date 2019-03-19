import { combineEpics } from 'redux-observable'

import nodesEpic from './nodesEpic'

const rootEpic = (
	combineEpics(
		nodesEpic,
	)
)

export default rootEpic
