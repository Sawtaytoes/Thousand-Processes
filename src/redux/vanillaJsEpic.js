import { delay, ignoreElements, mapTo, mergeMap, pluck, switchMap, take, tap } from 'rxjs/operators'
import { timer } from 'rxjs'

import getRandomWholeNumber from './getRandomWholeNumber'

// const colors = [
// 	'#000',
// 	'#00f',
// 	'#0f0',
// 	'#0ff',
// 	'#f00',
// 	'#f0f',
// 	'#ff0',
// 	'#fff',
// ]

const getRandomColor = () => (
	'rgb'
	.concat('(')
	.concat(getRandomWholeNumber() * 256)
	.concat(',')
	.concat(getRandomWholeNumber() * 256)
	.concat(',')
	.concat(getRandomWholeNumber() * 256)
	.concat(')')
	// colors[getRandomWholeNumber(8)]
)

const getRandomValue = () => (
	getRandomWholeNumber(
		10,
	)
)

const queue1 = []
const queue2 = []

let queue = queue1

const renderCell = (
	id,
) => {
	setTimeout(
		() => {
			queue
			.push(id)
		},
		getRandomWholeNumber(
			10000,
		)
	)
}

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

			cell.innerHTML = getRandomValue()
			cell.style.color = getRandomColor()

			renderCell(id)
		}

		tempQueue
		.splice(
			0,
			tempQueue.length,
		)
	},
	40,
)

const vanillaJsEpic = (
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
		pluck('id'),
		tap(renderCell),
		ignoreElements(),
	)
)

export default vanillaJsEpic
