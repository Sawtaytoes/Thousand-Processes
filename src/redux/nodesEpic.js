import { bufferTime, delay, filter, ignoreElements, map, mapTo, mergeAll, mergeMap, startWith, switchMap, take, tap } from 'rxjs/operators'
import { merge, Subject, timer } from 'rxjs'
import { ofType } from 'redux-observable'

import getRandomWholeNumber from './getRandomWholeNumber'
import { UPDATE_NODE, updateNode } from './nodesReducer'

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

const render$ = new Subject()

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
			// action$
			render$
			.pipe(
				// ofType(UPDATE_NODE),
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
		// delay(0),
		bufferTime(40),
		// bufferTime(1000),
		// map(render),
		mergeAll(),
		// tap(console.log),
		// map(updateNode),
		tap(id => {
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
