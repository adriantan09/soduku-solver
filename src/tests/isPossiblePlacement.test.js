import { testBoard } from '../data.js'
import { exportedForTesting } from '../solve.js'
const { isPossiblePlacement } = exportedForTesting

describe('test invalid placements in the sudoku board', () => {
    test('invalid placement of 6 in position (5, 5)', () => {
        expect(isPossiblePlacement(testBoard, 5, 5, 6)).toBeFalsy()
    })

    test('invalid placement of 4 in position (3, 7)', () => {
        expect(isPossiblePlacement(testBoard, 3, 7, 4)).toBeFalsy()
    })

    test('invalid placement of 9 in position (5, 1)', () => {
        expect(isPossiblePlacement(testBoard, 5, 1, 9)).toBeFalsy()
    })
})

describe('test valid placements in the sudoku board', () => {
    test('valid placement of 3 in position (2, 1)', () => {
        expect(isPossiblePlacement(testBoard, 2, 1, 3)).toBeTruthy()
    })

    test('valid placement of 1 in position (5, 4)', () => {
        expect(isPossiblePlacement(testBoard, 5, 4, 1)).toBeTruthy()
    })

    test('valid placement of 5 in position (4, 7)', () => {
        expect(isPossiblePlacement(testBoard, 4, 7, 5)).toBeTruthy()
    })
})
