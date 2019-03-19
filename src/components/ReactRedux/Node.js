import React from 'react'
import { connect } from 'react-redux'

const Node = ({
	color,
	value,
	x,
	y,
}) => (
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

export default (
	connect(
		(
			{ nodes },
			{ id },
		) => (
			nodes[id]
		)
	)(
		Node,
	)
)
