import React, { unstable_ConcurrentMode as ConcurrentMode } from 'react'
import { Provider } from 'react-redux'

import ResetState from './ResetState'
import store from './redux/store'

const ReactReduxCheat = () => (
	<div>
		<p>
			Render updates from the Redux state <strong>without a queue</strong>.
		</p>

		<div style={{ position: 'relative' }}>
			<ConcurrentMode>
				<Provider store={store}>
					<ResetState />
				</Provider>
			</ConcurrentMode>
		</div>
	</div>
)

export default ReactReduxCheat
