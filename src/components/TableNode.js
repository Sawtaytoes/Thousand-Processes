import React from 'react'
import { connect } from 'react-redux'

const TableNode = ({
	color,
	id,
	value,
}) => (
	<td
		id={`cell-${id}`}
		style={{
			padding: 0,
			margin: 0,
			lineHeight: '0.8em',
			color,
		}}
	>
		{value}
	</td>
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
		TableNode,
	)
)
