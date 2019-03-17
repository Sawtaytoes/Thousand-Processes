import { bufferTime, delay, filter, map, mapTo, mergeAll, mergeMap, startWith, switchMap, take, tap } from 'rxjs/operators'
import { merge, timer } from 'rxjs'
import { ofType } from 'redux-observable'

import getRandomWholeNumber from './getRandomWholeNumber'
import { UPDATE_NODE, updateNode } from './nodesReducer'

const nodesEpic = (
	action$,
	state$,
) => (
	state$
	.pipe(
		take(1),
		switchMap((
			nodes,
		) => (
			timer(1000)
			.pipe(
				mapTo(nodes),
			)
		)),
		mergeMap(({
			nodes,
		}) => (
			nodes
		)),
		mergeMap(({
			id,
		}) => (
			merge(
				(
					action$
					.pipe(
						ofType(UPDATE_NODE),
						filter(({
							id: updatedNodeId,
						}) => (
							updatedNodeId === id
						)),
						mergeMap(() => (
							timer(
								getRandomWholeNumber(
									10000,
								)
							)
						)),
					)
				),
				(
					timer(
						getRandomWholeNumber(
							10000,
						)
					)
				),
			)
			.pipe(
				mapTo(id),
			)
		)),
		// delay(0),
		bufferTime(40),
		mergeAll(),
		// tap(console.log),
		map(updateNode),
	)
)

export default nodesEpic
