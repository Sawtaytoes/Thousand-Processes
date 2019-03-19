import React, { Component } from 'react'

import generateNodes from '../../utils/generateNodes'
import getRandomColor from '../../utils/getRandomColor'
import getRandomValue from '../../utils/getRandomValue'
import Node from './Node'
import store from './utils/store'

const initialState = {
	nodes: generateNodes(5000),
}

class Nodes extends Component {
	state = initialState

	constructor(props) {
		super(props)

		this.queue1 = []
		this.queue2 = []

		store
		.queue = this.queue1
	}

	componentDidMount() {
		setInterval(
			this.updateNodes,
			40,
		)
	}

	updateNodes = () => {
		const { nodes } = this.state

		store
		.queue = (
			this.queue1.length > 0
			? this.queue2
			: this.queue1
		)

		const tempQueue = (
			this.queue1.length > 0
			? this.queue1
			: this.queue2
		)

		const updatedNodes = (
			tempQueue
			.reduce(
				(
					nodes,
					id,
				) => {
					const nodeIndex = (
						nodes
						.findIndex(({
							id: nodeId,
						}) => (
							nodeId === id
						))
					)

					return (
						nodes
						.slice(
							0,
							nodeIndex,
						)
						.concat({
							...nodes[nodeIndex],
							color: getRandomColor(),
							value: getRandomValue(),
						})
						.concat(
							nodes
							.slice(nodeIndex + 1)
						)
					)
				},
				nodes,
			)
		)

		this
		.setState({
			nodes: updatedNodes,
		})

		tempQueue
		.splice(
			0,
			tempQueue.length,
		)
	}

	render() {
		const { nodes } = this.state

		return (
			nodes
			.map(({
				id,
				...props
			}) => (
				<Node
					{...props}
					id={id}
					key={id}
				/>
			))
		)
	}
}

export default Nodes
