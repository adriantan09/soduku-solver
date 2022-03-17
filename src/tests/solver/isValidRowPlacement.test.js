import { testBoard } from '../../data.js'
import { exportedForTesting } from '../../solve.js'
const { isValidRowPlacement } = exportedForTesting

describe('test invalid placements in sudoku rows', () => {
    test('invalid placement of 5 in row index 3', () => {
        expect(isValidRowPlacement(testBoard, 3, 5)).toBeFalsy()
    })

    test('invalid placement of 7 in row index 8', () => {
        expect(isValidRowPlacement(testBoard, 8, 7)).toBeFalsy()
    })

    test('invalid placement of 6 in row index 0', () => {
        expect(isValidRowPlacement(testBoard, 0, 6)).toBeFalsy()
    })
})

describe('test valid placements in sudoku rows', () => {
    test('valid placement of 9 in row index 3', () => {
        expect(isValidRowPlacement(testBoard, 3, 9)).toBeTruthy()
    })

    test('valid placement of 1 in row index 8', () => {
        expect(isValidRowPlacement(testBoard, 8, 1)).toBeTruthy()
    })

    test('invalid placement of 7 in row index 0', () => {
        expect(isValidRowPlacement(testBoard, 0, 7)).toBeTruthy()
    })
})
