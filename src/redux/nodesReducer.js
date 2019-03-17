import createReducer from './createReducer'
import getRandomWholeNumber from './getRandomWholeNumber'

const getRandomColor = () => (
	'rgb'
	.concat('(')
	.concat(getRandomWholeNumber() * 256)
	.concat(',')
	.concat(getRandomWholeNumber() * 256)
	.concat(',')
	.concat(getRandomWholeNumber() * 256)
	.concat(')')
)

const getRandomValue = () => (
	getRandomWholeNumber(
		10,
	)
)

export const UPDATE_NODE = 'UPDATE_NODE'

export const updateNode = (
	id,
) => ({
	id,
	type: UPDATE_NODE,
	updatedValues: {
		color: getRandomColor(),
		value: getRandomValue(),
	},
})

const numberOfColumns = 100

const initialState = (
	Array(8000)
	.fill()
	.map((
		item,
		index,
	) => ({
		color: 'black',
		id: index,
		value: '0',
		x: index % numberOfColumns,
		y: Math.floor(index / numberOfColumns),
	}))
)

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
