import React, { unstable_ConcurrentMode as ConcurrentMode } from 'react'
import { Provider } from 'react-redux'

import Nodes from './Nodes'
import store from './redux/store'

const ReactRedux = () => (
	<div>
		<p>
			{"Render updates from the Redux state."}
		</p>

		<div style={{ position: 'relative' }}>
			<ConcurrentMode>
				<Provider store={store}>
					<Nodes />
				</Provider>
			</ConcurrentMode>
		</div>
	</div>
)

export default ReactRedux
