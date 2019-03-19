import { bufferTime, delay, filter, map, mapTo, mergeAll, mergeMap, startWith, switchMap, take } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { timer } from 'rxjs'

import getRandomWholeNumber from '../../../utils/getRandomWholeNumber'
import { UPDATE_NODE, updateNode } from './actions'

const nodesEpic = (
	action$,
	state$,
) => (
	state$
	.pipe(
		take(1),
		delay(1000),
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
