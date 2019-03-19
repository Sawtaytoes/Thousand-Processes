import React from 'react'
import { connect } from 'react-redux'

import Node from './Node'

const Nodes = ({
	nodes,
}) => (
	nodes
	.map(({
		id,
	}) => (
		<Node
			id={id}
			key={id}
		/>
	))
)

export default (
	connect(
		({
			nodes,
		}) => ({
			nodes,
		})
	)(
		Nodes,
	)
)
