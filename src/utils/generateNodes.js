const numberOfColumns = 100

const generateNodes = (
	numberOfNodes,
) => (
	Array(numberOfNodes)
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

export default generateNodes
