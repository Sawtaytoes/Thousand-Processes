import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Nodes from './Nodes'
import { resetNodes, resetQueue } from './redux/actions'

class ResetState extends PureComponent {
	componentDidMount() {
		setInterval(
			this.updateNodes,
			40,
		)
	}

	componentWillUnmount() {
		clearInterval(
			this
			.intervalId
		)

		const { dispatch } = this.props

		dispatch(resetNodes())
	}

	updateNodes = () => {
		const {
			dispatch,
			queue,
		} = this.props

		queue
		.length > 0
		&& (
			queue
			.forEach(dispatch)
		)
		&& (
			dispatch(resetQueue())
		)
	}

	render() {
		return (
			<Nodes />
		)
	}
}

export default (
	connect(({
		queue,
	}) => ({
		queue,
	}))(
		ResetState,
	)
)
