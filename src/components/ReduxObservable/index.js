import React, { unstable_ConcurrentMode as ConcurrentMode } from 'react'
import { Provider } from 'react-redux'

import ResetState from './ResetState'
import store from './redux/store'

const ReduxObservable = () => (
	<div>
		<p>
			{"Render updates from the Redux-Observable to Redux state."}
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

export default ReduxObservable
