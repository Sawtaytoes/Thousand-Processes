import React from 'react'
import { connect } from 'react-redux'

import './Node.css'

const Node = ({
	id,
	value,
}) => (
	<td
		className="Node"
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
		Node,
	)
)
