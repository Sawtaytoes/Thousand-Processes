import React, { Component } from 'react'

import getRandomColor from '../../utils/getRandomColor'
import getRandomValue from '../../utils/getRandomValue'
import getRandomWholeNumber from '../../utils/getRandomWholeNumber'
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
				getRandomWholeNumber(
					10000,
				)
			)
		)
	}

	updateState = () => {
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
