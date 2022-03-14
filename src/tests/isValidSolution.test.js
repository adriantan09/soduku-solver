import { solutionBoard, invalidSolutionBoard } from '../data.js'
import { exportedForTesting } from '../solve.js'
const { isValidSolution } = exportedForTesting

describe('test validator for sudoku solutions', () => {
    test('validating a correct sudoku board', () => {
        // expect(isValidSolution(solutionBoard)).toBeTruthy()
    })

    test('validating an incorrect sudoku board', () => {
        // expect(isValidSolution(invalidSolutionBoard)).toBeFalsy()
    })
})
