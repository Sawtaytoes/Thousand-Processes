import createReducer from '../../../utils/createReducer'
import generateNodes from '../../../utils/generateNodes'
import { UPDATE_NODE } from './actions'

const initialState = generateNodes(500)

const reducerActions = {
	[UPDATE_NODE]: (
		nodes,
		{
			id,
			updatedValues,
		},
	) => (
		nodes
		.map((
			node,
		) => (
			node.id === id
			? {
				...node,
				...updatedValues,
			}
			: node
		))
	),
}

const nodesReducer = (
	createReducer(
		reducerActions,
		initialState,
	)
)

export default nodesReducer
