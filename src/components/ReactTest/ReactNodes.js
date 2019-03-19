import React, { Component } from 'react'

import ReactNode from './ReactNode'

const numberOfColumns = 100

const initialState = {
	nodes: (
		Array(10000)
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
	),
}

class ReactNodes extends Component {
	state = initialState

	render() {
		const { nodes } = this.state

		return (
			nodes
			.map(({
				id,
				...props
			}) => (
				<ReactNode
					{...props}
					id={id}
					key={id}
				/>
			))
		)
	}
}

export default ReactNodes
