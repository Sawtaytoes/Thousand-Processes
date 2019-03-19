import getRandomColor from '../../../utils/getRandomColor'
import getRandomValue from '../../../utils/getRandomValue'

export const RESET_NODES = 'RESET_NODES'
export const UPDATE_NODE = 'UPDATE_NODE'

export const resetNodes = () => ({
	type: RESET_NODES,
})

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
