import createReducer from '../../../utils/createReducer'
import generateNodes from '../../../utils/generateNodes'
import { RESET_NODES, UPDATE_NODE } from './actions'

const initialState = generateNodes(1500)

const reducerActions = {
	[RESET_NODES]: () => (
		initialState
	),
	[UPDATE_NODE]: (
		nodes,
		{
			id: nodeId,
			updatedValues,
		},
	) => {
		const nodeIndex = (
			nodes
			.findIndex(({
				id,
			}) => (
				id === nodeId
			))
		)

		return (
			nodes
			.slice(0, nodeIndex)
			.concat({
				...nodes[nodeIndex],
				...updatedValues,
			})
			.concat(
				nodes
				.slice(nodeIndex + 1)
			)
		)
	},
}

const nodesReducer = (
	createReducer(
		reducerActions,
		initialState,
	)
)

export default nodesReducer
