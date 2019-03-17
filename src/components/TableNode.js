import React from 'react'
import { connect } from 'react-redux'

const TableNode = ({
	id,
	value,
}) => (
	<td
		className="TableNode"
		id={`cell-${id}`}
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
