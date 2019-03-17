import { ignoreElements, mapTo, mergeMap, pluck, switchMap, take, tap } from 'rxjs/operators'
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

let queue = []

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
		for (const id of queue) {
			const cell = (
				document
				.getElementById(`cell-${id}`)
			)

			cell.innerHTML = getRandomValue()
			cell.style.color = getRandomColor()

			renderCell(id)
		}

		queue = []
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
		pluck('id'),
		tap(renderCell),
		ignoreElements(),
	)
)

export default vanillaJsEpic
