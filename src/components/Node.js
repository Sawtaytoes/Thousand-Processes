import React from 'react'
import { connect } from 'react-redux'

const Node = ({
	color,
	id,
	value,
	x,
	y,
}) => (
	<div
		id={`cell-${id}`}
		style={{
			color,
			left: `${y}ch`,
			position: 'absolute',
			top: `${x}em`,
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
