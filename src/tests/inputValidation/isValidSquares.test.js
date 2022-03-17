import { testBoard, solutionBoard, invalidBoard } from '../../data.js'
import { exportedForTesting } from '../../validator.js'
const { isValidSquares } = exportedForTesting

describe('test invalid sudoku squares', () => {
    test('partially filled board', () => {
        expect(isValidSquares(invalidBoard)).toBeFalsy()
    })
})

describe('test valid sudoku squares', () => {
    test('full board', () => {
        expect(isValidSquares(solutionBoard)).toBeTruthy()
    })

    test('partially filled board', () => {
        expect(isValidSquares(testBoard)).toBeTruthy()
    })

    test('empty board', () => {
        const emptyBoard = Array(9).fill().map(()=>Array(9).fill(0))
        expect(isValidSquares(emptyBoard)).toBeTruthy()
    })
})
