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
