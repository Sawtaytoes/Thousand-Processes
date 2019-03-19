import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Nodes from './Nodes'
import { resetNodes, startProcessing } from './redux/actions'

class ResetState extends PureComponent {
	componentDidMount() {
		const { dispatch } = this.props

		dispatch(startProcessing())
	}

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
