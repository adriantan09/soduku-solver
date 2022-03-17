import { testBoard, unsolvableBoard } from '../../data.js'
import { exportedForTesting } from '../../solve.js'
const { isSolvable } = exportedForTesting

describe('test isSolvable', () => {
    test('solvable sudoku board', () => {
        expect(isSolvable(testBoard)).toBeTruthy()
    })

    test('unsolvable sudoku board', () => {
        expect(isSolvable(unsolvableBoard)).toBeFalsy()
    })
})
