import { solutionBoard, invalidBoard } from '../../data.js'
import { exportedForTesting } from '../../validator.js'
const { isValidBoard } = exportedForTesting

describe('test validator for sudoku solutions', () => {
    test('validating a correct sudoku board', () => {
        expect(isValidBoard(solutionBoard)).toBeTruthy()
    })

    test('validating an incorrect sudoku board', () => {
        expect(isValidBoard(invalidBoard)).toBeFalsy()
    })
})
