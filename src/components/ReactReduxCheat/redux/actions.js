import getRandomColor from '../../../utils/getRandomColor'
import getRandomValue from '../../../utils/getRandomValue'

export const QUEUE_ACTION = 'QUEUE_ACTION'
export const RESET_NODES = 'RESET_NODES'
export const RESET_QUEUE = 'RESET_QUEUE'
export const UPDATE_NODE = 'UPDATE_NODE'

export const queueAction = (
	action,
) => ({
	action,
	type: QUEUE_ACTION,
})

export const resetQueue = () => ({
	type: RESET_QUEUE,
})

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
