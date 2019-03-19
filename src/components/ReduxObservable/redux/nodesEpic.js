import { bufferTime, delay, filter, map, mapTo, mergeAll, mergeMap, startWith, switchMap, takeUntil } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { of } from 'rxjs'

import getRandomTimeout from '../../../utils/getRandomTimeout'
import { RESET_NODES, START_PROCESSING, UPDATE_NODE, updateNode } from './actions'

const nodesEpic = (
	action$,
	state$,
) => (
	action$
	.pipe(
		ofType(START_PROCESSING),
		delay(0),
		switchMap(() => (
			of(state$.value)
			.pipe(
				mergeMap(({
					nodes,
				}) => (
					nodes
				)),
				mergeMap(({
					id,
				}) => (
					action$
					.pipe(
						ofType(UPDATE_NODE),
						filter(({
							id: updatedNodeId,
						}) => (
							updatedNodeId === id
						)),
						startWith(0),
						delay(getRandomTimeout()),
					)
					.pipe(
						mapTo(id),
					)
				)),
				bufferTime(40),
				filter((
					ids,
				) => (
					ids
					.length > 0
				)),
				mergeAll(),
				takeUntil(
					action$
					.pipe(
						ofType(RESET_NODES),
					)
				),
				map(updateNode),
			)
		)),
	)
)

export default nodesEpic
