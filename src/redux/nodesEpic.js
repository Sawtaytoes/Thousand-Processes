import { bufferTime, delay, filter, map, mapTo, mergeAll, mergeMap, startWith, switchMap, take, tap } from 'rxjs/operators'
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
				mapTo(id),
				startWith(id),
			)
		)),
		mergeMap((
			id,
		) => (
			timer(
				getRandomWholeNumber(
					10000,
				)
			)
			.pipe(
				mapTo(id)
			)
		)),
		// bufferTime(40),
		// mergeAll(),
		// tap(console.log),
		map(updateNode),
	)
)

export default nodesEpic
