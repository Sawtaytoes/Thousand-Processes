import React, { unstable_ConcurrentMode as ConcurrentMode } from 'react'

import Nodes from './Nodes'

const ReactChildren = () => (
	<ConcurrentMode>
		<Nodes />
	</ConcurrentMode>
)

export default ReactChildren
