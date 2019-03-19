import getRandomWholeNumber from './getRandomWholeNumber'

const getRandomTimeout = () => (
	Math
	.max(
		getRandomWholeNumber(
			10000,
		),
		1000,
	)
)

export default getRandomTimeout
