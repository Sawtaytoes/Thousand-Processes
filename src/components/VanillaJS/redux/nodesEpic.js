import { delay, ignoreElements, mapTo, mergeMap, switchMap, tap } from 'rxjs/operators'
import { merge, of } from 'rxjs'
import { ofType } from 'redux-observable'

import getRandomColor from '../../../utils/getRandomColor'
import getRandomTimeout from '../../../utils/getRandomTimeout'
import getRandomValue from '../../../utils/getRandomValue'
import { RESET_NODES, START_PROCESSING } from './actions'

const queue1 = []
const queue2 = []
const timeoutIds = {}

let queue = queue1

const clearQueue = (
	queue,
) => {
	queue
	.splice(
		0,
		queue.length,
	)
}

const renderCell = (
	id,
) => (
	setTimeout(
		() => {
			queue
			.push(id)
		},
		getRandomTimeout(),
	)
)

let intervalId

const createInterval = () => (
	setInterval(
		() => {
			queue = (
				queue1.length > 0
				? queue2
				: queue1
			)

			const tempQueue = (
				queue1.length > 0
				? queue1
				: queue2
			)

			for (const id of tempQueue) {
				const cell = (
					document
					.getElementById(`cell-${id}`)
				)

				if (!cell) {
					continue
				}

				cell.innerHTML = getRandomValue()
				cell.style.color = getRandomColor()

				timeoutIds[id] = renderCell(id)
			}

			clearQueue(tempQueue)
		},
		40,
	)
)

const nodesEpic = (
	action$,
	state$,
) => (
	merge(
		(
			action$
			.pipe(
				ofType(RESET_NODES),
				tap(() => {
					clearInterval(intervalId)
				}),
				tap(() => {
					Object
					.values(timeoutIds)
					.forEach(clearTimeout)
				}),
				tap(() => {
					clearQueue(queue1)
					clearQueue(queue2)
				}),
			)
		),
		(
			action$
			.pipe(
				ofType(START_PROCESSING),
				delay(0),
				tap(() => {
					intervalId = createInterval()
				}),
				switchMap(() => (
					of(state$.value)
					.pipe(
						mergeMap(({
							nodes,
						}) => (
							nodes
						)),
						tap(({
							id,
						}) => {
							timeoutIds[id] = renderCell(id)
						}),
					)
				)),
			)
		),
	)
	.pipe(
		ignoreElements(),
	)
)

export default nodesEpic
