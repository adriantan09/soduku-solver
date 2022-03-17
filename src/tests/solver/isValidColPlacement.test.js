import { testBoard } from '../../data.js'
import { exportedForTesting } from '../../solve.js'
const { isValidColPlacement } = exportedForTesting

describe('test invalid placements in sudoku columns', () => {
    test('invalid placement of 1 in column index 3', () => {
        expect(isValidColPlacement(testBoard, 3, 1)).toBeFalsy()
    })

    test('invalid placement of 4 in column index 8', () => {
        expect(isValidColPlacement(testBoard, 8, 4)).toBeFalsy()
    })

    test('invalid placement of 6 in column index 2', () => {
        expect(isValidColPlacement(testBoard, 2, 6)).toBeFalsy()
    })
})

describe('test valid placements in sudoku columns', () => {
    test('valid placement of 8 in column index 3', () => {
        expect(isValidColPlacement(testBoard, 3, 8)).toBeTruthy()
    })

    test('valid placement of 7 in column index 8', () => {
        expect(isValidColPlacement(testBoard, 8, 7)).toBeTruthy()
    })

    test('valid placement of 1 in column index 2', () => {
        expect(isValidColPlacement(testBoard, 2, 1)).toBeTruthy()
    })
})
