import React, { unstable_ConcurrentMode as ConcurrentMode } from 'react'

import ReactNodes from './ReactNodes'

const ReactTest = () => (
	<ConcurrentMode>
		<ReactNodes />
	</ConcurrentMode>
)

export default ReactTest
