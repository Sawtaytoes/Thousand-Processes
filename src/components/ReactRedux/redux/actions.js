import getRandomColor from '../../../utils/getRandomColor'
import getRandomValue from '../../../utils/getRandomValue'

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
