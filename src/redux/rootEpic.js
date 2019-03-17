import { combineEpics } from 'redux-observable'

// import nodesEpic from './nodesEpic'
import tableNodesEpic from './tableNodesEpic'

const rootEpic = (
	combineEpics(
		// nodesEpic,
		tableNodesEpic,
	)
)

export default rootEpic
