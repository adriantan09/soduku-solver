import { testBoard, solutionBoard, invalidBoard } from '../../data.js'
import { exportedForTesting } from '../../validator.js'
const { isValidCol } = exportedForTesting

describe('test invalid sudoku columns', () => {
    test('full column (duplicate 6)', () => {
        expect(isValidCol(invalidBoard, 4)).toBeFalsy()
    })

    test('partially filled column (duplicate 1)', () => {
        expect(isValidCol(invalidBoard, 0)).toBeFalsy()
    })  
})

describe('test valid sudoku columns', () => {
    test('full column', () => {
        expect(isValidCol(solutionBoard, 8)).toBeTruthy()
    })

    test('partially filled column', () => {
        expect(isValidCol(testBoard, 1)).toBeTruthy()
    })

    test('empty column', () => {
        const emptyBoard = Array(9).fill().map(()=>Array(9).fill(0))
        expect(isValidCol(emptyBoard, 5)).toBeTruthy()
    })
})
