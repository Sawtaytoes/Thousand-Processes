import { bufferTime, delay, filter, map, mapTo, mergeAll, mergeMap, startWith, switchMap, take } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { timer } from 'rxjs'

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
			action$
			.pipe(
				ofType(UPDATE_NODE),
				filter(({
					id: updatedNodeId,
				}) => (
					updatedNodeId === id
				)),
				startWith(0),
				switchMap(() => (
					timer(
						getRandomWholeNumber(
							10000,
						)
					)
				)),
			)
			.pipe(
				mapTo(id),
			)
		)),
		bufferTime(40),
		mergeAll(),
		map(updateNode),
	)
)

export default nodesEpic
