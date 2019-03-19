import React, { unstable_ConcurrentMode as ConcurrentMode } from 'react'

import Nodes from './Nodes'

const ReactChildren = () => (
	<div>
		<p>
			{"Render updates from child elements."}
		</p>

		<div style={{ position: 'relative' }}>
			<ConcurrentMode>
				<Nodes />
			</ConcurrentMode>
		</div>
	</div>
)

export default ReactChildren
