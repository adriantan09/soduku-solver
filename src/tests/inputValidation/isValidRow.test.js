import { exportedForTesting } from '../../validator.js'
const { isValidRow } = exportedForTesting

describe('test invalid sudoku rows', () => {
    test('full row (duplicate 2)', () => {
        const invalidRow = [2, 4, 3, 5, 8, 7, 6, 2, 9]
        expect(isValidRow(invalidRow)).toBeFalsy()
    })

    test('partially filled row (duplicate 1)', () => {
        const invalidRow = [2, 0, 0, 1, 8, 0, 1, 6, 9]
        expect(isValidRow(invalidRow)).toBeFalsy()
    })  
})

describe('test valid sudoku rows', () => {
    test('full row', () => {
        const validRow = [2, 4, 3, 5, 8, 7, 6, 1, 9]
        expect(isValidRow(validRow)).toBeTruthy()
    })

    test('partially filled row', () => {
        const validRow = [2, 0, 0, 5, 8, 0, 1, 6, 9]
        expect(isValidRow(validRow)).toBeTruthy()
    })

    test('empty row', () => {
        const validRow = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        expect(isValidRow(validRow)).toBeTruthy()
    })
})
