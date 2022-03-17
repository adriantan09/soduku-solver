export const isValidBoard = (numbers) => {
    console.table(numbers)
    for (let row = 0; row < 9; row++) {
        if (!isValidRow(numbers[row])) return false
    }
    for (let col = 0; col < 9; col++) {
        if (!isValidCol(numbers, col)) return false
    }
    if (!isValidSquares(numbers)) return false
    return true
}

const isValidRow = (row) => {
    row = row.filter(n => n !== 0)
    return new Set(row).size === row.length
}

const isValidCol = (numbers, colIndex) => {
    let col = numbers.map(row => { return row[colIndex] })
    col = col.filter(n => n !== 0)
    return new Set(col).size === col.length
}

const isValidSquares = (numbers) => {
    for (let row = 0; row <= 6; row += 3) {
        for (let col = 0; col <= 6; col += 3) {
            if (!isValidSquare(numbers, row, col)) return false
        }
    }
    return true
}

const isValidSquare = (numbers, rowStart, colStart) => {
    let square = []
    for (let row = rowStart; row <= rowStart + 2; row++) {
        for (let col = colStart; col <= colStart + 2; col++) {
            square.push(numbers[row][col])
        }
    }
    square = square.filter(n => n !== 0)
    return new Set(square).size === square.length
}

export const exportedForTesting = {
    isValidRow,
    isValidCol,
    isValidSquares,
    isValidBoard
}
