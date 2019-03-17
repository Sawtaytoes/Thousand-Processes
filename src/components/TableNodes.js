import React from 'react'
import { connect } from 'react-redux'

import TableNode from './TableNode'

const Nodes = ({
	nodes,
}) => (
	<table
		style={{
			borderCollapse: 'collapse',
			borderSpacing: 0,
		}}
	>
		<tbody>
			{
				nodes
				.reduce(
					(
						nodeGroups,
						node,
					) => {
						!nodeGroups[node.y]
						&& (nodeGroups[node.y] = [])

						nodeGroups[node.y]
						.push(node)

						return nodeGroups
					},
					[],
				)
				.map((
					nodeGroup,
					index,
				) => (
					<tr key={index}>
						{
							nodeGroup
							.map(({
								id,
							}) => (
								<TableNode
									id={id}
									key={id}
								/>
							))
						}
					</tr>
				))
			}
		</tbody>
	</table>
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
