const getRandomWholeNumber = (
	multiplier = 1.5,
) => (
	Math
	.floor(
		Math.random() * multiplier
	)
)

export default getRandomWholeNumber
