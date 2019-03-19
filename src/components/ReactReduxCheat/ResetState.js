import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Nodes from './Nodes'
import { resetNodes, resetQueue } from './redux/actions'

class ResetState extends PureComponent {
	componentWillUnmount() {
		const { dispatch } = this.props

		dispatch(resetNodes())
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
