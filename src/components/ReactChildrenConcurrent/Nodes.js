import React, { Component } from 'react'

import generateNodes from '../../utils/generateNodes'
import Node from './Node'
import store from './utils/store'

const initialState = {
	nodes: generateNodes(10000),
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
		this
		.intervalId = (
			setInterval(
				this.updateNodes,
				40,
			)
		)
	}

	componentWillUnmount() {
		clearInterval(
			this
			.intervalId
		)
	}

	updateNodes = () => {
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

		tempQueue
		.forEach((
			handler,
		) => {
			handler()
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
				color,
				id,
				value,
				...props
			}) => (
				<Node
					{...props}
					id={id}
					initialColor={color}
					initialValue={value}
					key={id}
				/>
			))
		)
	}
}

export default Nodes
