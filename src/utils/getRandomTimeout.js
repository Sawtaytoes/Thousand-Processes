import getRandomWholeNumber from './getRandomWholeNumber'

const getRandomTimeout = () => (
	getRandomWholeNumber(
		10000,
	)
	+ 1000
)

export default getRandomTimeout
