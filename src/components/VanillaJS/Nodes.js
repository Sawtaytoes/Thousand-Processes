import React from 'react'
import { connect } from 'react-redux'

import Node from './Node'

const Nodes = ({
	nodes,
}) => (
	nodes
	.map(({
		id,
		...props
	}) => (
		<Node
			{...props}
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
