import React from 'react'

import Nodes from './Nodes'

const ReactChildren = () => (
	<div>
		<p>
			{"Render updates from child elements."}
		</p>

		<div style={{ position: 'relative' }}>
			<Nodes />
		</div>
	</div>
)

export default ReactChildren
