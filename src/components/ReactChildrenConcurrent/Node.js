import React, { Component } from 'react'

import getRandomColor from '../../utils/getRandomColor'
import getRandomTimeout from '../../utils/getRandomTimeout'
import getRandomValue from '../../utils/getRandomValue'
import store from './utils/store'

class Node extends Component {
	constructor(props) {
		super(props)

		const {
			initialColor,
			initialValue,
		} = props

		this
		.state = {
			color: initialColor,
			value: initialValue,
		}
	}

	componentDidMount() {
		this.queueUpdate()
	}

	componentWillUnmount() {
		this.unmounted = true
		this.stopListener()
	}

	stopListener = () => {
		clearTimeout(
			this
			.timeoutId
		)
	}

	queueUpdate = () => {
		this
		.stopListener()

		this
		.timeoutId = (
			setTimeout(
				() => {
					store
					.queue
					.push(
						this
						.updateState
					)

					this
					.queueUpdate()
				},
				getRandomTimeout(),
			)
		)
	}

	updateState = () => {
		if (this.unmounted) {
			return
		}

		this
		.setState({
			...this.state,
			color: getRandomColor(),
			value: getRandomValue(),
		})
	}

	render() {
		const {
			x,
			y,
		} = this.props

		const {
			color,
			value,
		} = this.state

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
