import React from 'react'

import Nodes from './Nodes'

const ReactParent = () => (
	<div>
		<p>
			{"Render updates from the parent element's nodes list."}
		</p>

		<div style={{ position: 'relative' }}>
			<Nodes />
		</div>
	</div>
)

export default ReactParent
