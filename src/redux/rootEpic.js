import { combineEpics } from 'redux-observable'

// import nodesEpic from './nodesEpic'
// import tableNodesEpic from './tableNodesEpic'
import vanillaJsEpic from './vanillaJsEpic'

const rootEpic = (
	combineEpics(
		// nodesEpic,
		// tableNodesEpic,
		vanillaJsEpic,
	)
)

export default rootEpic
