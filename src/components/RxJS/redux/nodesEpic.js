import { bufferTime, delay, filter, ignoreElements, mapTo, mergeAll, mergeMap, startWith, switchMap, take, takeUntil, tap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { Subject, timer } from 'rxjs'

import getRandomColor from '../../../utils/getRandomColor'
import getRandomValue from '../../../utils/getRandomValue'
import getRandomWholeNumber from '../../../utils/getRandomWholeNumber'
import { RESET_NODES } from './actions'

const render$ = new Subject()

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
			render$
			.pipe(
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
				tap(console.log),
			)
		),
		tap((
			id,
		) => {
			const cell = (
				document
				.getElementById(`cell-${id}`)
			)

			cell.innerHTML = getRandomValue()
			cell.style.color = getRandomColor()

			render$
			.next({ id })
		}),
		ignoreElements(),
	)
)

export default nodesEpic
