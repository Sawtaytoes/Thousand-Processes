import React, { Component } from 'react'
import { connect } from 'react-redux'

import getRandomWholeNumber from '../../utils/getRandomWholeNumber'
import { queueAction, updateNode } from './redux/actions'

// THESE QUEUES NEED TO OCCUR AT 40ms INTERVALS

class Node extends Component {
	componentDidMount() {
		this.queueUpdate()
	}

	componentDidUpdate() {
		this.queueUpdate()
	}

	componentWillUnmount() {
		clearTimeout(
			this
			.timeoutId
		)
	}

	queueUpdate = () => {
		const {
			dispatch,
			id,
		} = this.props

		this
		.timeoutId = (
			setTimeout(
				() => {
					dispatch(
						// queueAction(
							updateNode(id)
						// )
					)
				},
				getRandomWholeNumber(
					10000,
				),
			)
		)
	}

	render() {
		const {
			color,
			value,
			x,
			y,
		} = this.props

		return (
			<div
				style={{
					color,
					left: `${x}ch`,
					position: 'absolute',
					top: `${y}em`,
				}}
			>
				{value}
			</div>
		)
	}
}

export default (
	connect(
		(
			{ nodes },
			{ id },
		) => (
			nodes[id]
		)
	)(
		Node,
	)
)
