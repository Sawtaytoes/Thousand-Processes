import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Nodes from './Nodes'
import { resetNodes } from './redux/actions'

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
	connect()(
		ResetState,
	)
)
