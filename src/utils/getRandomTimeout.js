import getRandomWholeNumber from './getRandomWholeNumber'

const getRandomTimeout = () => (
	getRandomWholeNumber(
		9000,
	)
	+ 1000
)

export default getRandomTimeout
