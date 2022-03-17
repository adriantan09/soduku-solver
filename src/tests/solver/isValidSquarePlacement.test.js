import { testBoard } from '../../data.js'
import { exportedForTesting } from '../../solve.js'
const { isValidSquarePlacement } = exportedForTesting

describe('test invalid placements in 3x3 sudoku squares', () => {
    test('invalid placement of 1 in position (0, 0)', () => {
        expect(isValidSquarePlacement(testBoard, 0, 0, 1)).toBeFalsy()
    })

    test('invalid placement of 7 in position (2, 2)', () => {
        expect(isValidSquarePlacement(testBoard, 2, 2, 7)).toBeFalsy()
    })

    test('invalid placement of 9 in position (5, 4)', () => {
        expect(isValidSquarePlacement(testBoard, 5, 4, 9)).toBeFalsy()
    })
})

describe('test valid placements in 3x3 sudoku squares', () => {
    test('valid placement of 5 in position (0, 2)', () => {
        expect(isValidSquarePlacement(testBoard, 0, 2, 5)).toBeTruthy()
    })
    
    test('valid placement of 8 in position (8, 5)', () => {
        expect(isValidSquarePlacement(testBoard, 8, 5, 8)).toBeTruthy()
    })
    
    test('valid placement of 3 in position (0, 7)', () => {
        expect(isValidSquarePlacement(testBoard, 0, 7, 3)).toBeTruthy()
    })
})
