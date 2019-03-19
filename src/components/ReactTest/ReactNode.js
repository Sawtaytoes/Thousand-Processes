import React, { Component } from 'react'

import getRandomWholeNumber from '../../utils/getRandomWholeNumber'

const getRandomColor = () => (
	'rgb'
	.concat('(')
	.concat(getRandomWholeNumber() * 256)
	.concat(',')
	.concat(getRandomWholeNumber() * 256)
	.concat(',')
	.concat(getRandomWholeNumber() * 256)
	.concat(')')
)

const getRandomValue = () => (
	getRandomWholeNumber(
		10,
	)
)

class ReactNode extends Component {
	constructor(props) {
		super(props)

		const {
			color,
			value,
			x,
			y,
		} = props

		this
		.state = {
			color,
			value,
			x,
			y,
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
					this
					.setState({
						...this.state,
						color: getRandomColor(),
						value: getRandomValue(),
					})

					this
					.queueUpdate()
				},
				getRandomWholeNumber(
					10000,
				)
			)
		)
	}

	render() {
		const {
			color,
			value,
			x,
			y,
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

export default ReactNode
