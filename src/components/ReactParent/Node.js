import React, { Component } from 'react'

import getRandomTimeout from '../../utils/getRandomTimeout'
import store from './utils/store'

class Node extends Component {
	componentDidMount() {
		this
		.queueUpdate()
	}

	componentDidUpdate() {
		this
		.queueUpdate()
	}

	componentWillUnmount() {
		this
		.stopListener()
	}

	shouldComponentUpdate({
		color: nextColor,
		value: nextValue,
	}) {
		const {
			color,
			value,
		} = this.props

		return (
			color !== nextColor
			|| value !== nextValue
		)
	}

	stopListener = () => {
		clearTimeout(
			this
			.timeoutId
		)
	}

	queueUpdate = () => {
		const { id } = this.props

		this
		.stopListener()

		this
		.timeoutId = (
			setTimeout(
				() => {
					store
					.queue
					.push(id)
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

export default Node
