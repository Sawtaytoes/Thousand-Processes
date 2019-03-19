import createReducer from '../../../utils/createReducer'
import generateNodes from '../../../utils/generateNodes'
import { RESET_NODES } from './actions'

const initialState = generateNodes(10000)

const reducerActions = {
	[RESET_NODES]: () => (
		initialState
	),
}

const nodesReducer = (
	createReducer(
		reducerActions,
		initialState,
	)
)

export default nodesReducer
