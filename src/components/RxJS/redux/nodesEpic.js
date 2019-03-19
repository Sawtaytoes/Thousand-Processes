import { bufferTime, delay, filter, ignoreElements, mapTo, mergeAll, mergeMap, startWith, switchMap, takeUntil, tap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { of, Subject, timer } from 'rxjs'

import getRandomColor from '../../../utils/getRandomColor'
import getRandomValue from '../../../utils/getRandomValue'
import getRandomWholeNumber from '../../../utils/getRandomWholeNumber'
import { RESET_NODES, START_PROCESSING } from './actions'

const render$ = new Subject()

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
			)
		)),
		ignoreElements(),
	)
)

export default nodesEpic