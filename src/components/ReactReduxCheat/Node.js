import React, { Component } from 'react'
import { connect } from 'react-redux'

import getRandomTimeout from '../../utils/getRandomTimeout'
import { updateNode } from './redux/actions'

// THESE CHANGES AREN'T OCCURRING AT 40ms INTERVALS

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
						updateNode(id)
					)
				},
				getRandomTimeout(),
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
