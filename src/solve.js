import { testBoard, solutionBoard } from './data.js'

export const solve = (numbers) => {
    if (isSolvable(numbers)) {
        return numbers
    } else {
        console.log('no solution found')
        return null
    }
}

const isSolvable = (numbers) => {
    let row = 0
    let col = 0
    let isBlank = false

    for (row = 0; row < 9; row++) {
        for (col = 0; col < 9; col++) {
            if (numbers[row][col] === 0) {
                isBlank = true
                break
            }
        }
        if (isBlank) break
    }

    // Every position has been filled 
    // meaning there is a solution
    if (!isBlank) return true

    for (let n = 1; n <= 9; n++) {
        if (isPossiblePlacement(numbers, row, col, n)) {
            numbers[row][col] = n
            if (isSolvable(numbers)) return true
            numbers[row][col] = 0
        }
    }

    return false
}

const isPossiblePlacement = (numbers, row, col, target) => {
    return (
        isValidRowPlacement(numbers, row, target) &&
        isValidColPlacement(numbers, col, target) &&
        isValidSquarePlacement(numbers, row, col, target)
    )
}

const isValidRowPlacement = (numbers, rowIndex, target) => {
    for (let i = 0; i < 9; i++) {
        // console.log(numbers[rowIndex][i])
        if (numbers[rowIndex][i] === target) return false
    }
    return true
}

const isValidColPlacement = (numbers, colIndex, target) => {
    for (let i = 0; i < 9; i++) {
        if (numbers[i][colIndex] === target) return false
    }
    return true
}

const isValidSquarePlacement = (numbers, rowIndex, colIndex, target) => {
    const rowStart = Math.floor(rowIndex / 3) * 3
    const rowEnd = rowStart + 3
    const colStart = Math.floor(colIndex / 3) * 3
    const colEnd = colStart + 3

    for (let row = rowStart; row < rowEnd; row++) {
        for (let col = colStart; col < colEnd; col++) {
            if (numbers[row][col] === target) return false
        }
    }
    return true
}

// validation functions
// const isValidRow = (row) => {
//     return arraysEqual(row.sort(), [1, 2, 3, 4, 5, 6, 7, 8, 9])
// }

// const isValidCol = (numbers, colIndex) => {
//     const col = numbers.map(row => { return row[colIndex] })
//     return arraysEqual(col.sort(), [1, 2, 3, 4, 5, 6, 7, 8, 9])
// }

// const isValidSquare = (numbers, rowIndex, colIndex) => {
//     const rowStart = Math.floor(rowIndex / 3) * 3
//     const rowEnd = rowStart + 3
//     const colStart = Math.floor(colIndex / 3) * 3
//     const colEnd = colStart + 3

//     const arr = []
//     for (let row = rowStart; row < rowEnd; row++) {
//         for (let col = colStart; col < colEnd; col++) {
//             arr.push(numbers[row][col])
//         }
//     }
    
//     return new Set(arr).size !== arr.length
// }

// const isValidSolution = (numbers) => {
//     numbers.forEach((row, colIndex) => {
//         if (!isValidRow(row)) return false
//         if (!isValidCol(numbers, colIndex)) return false
//         row.forEach((e, rowIndex) => {
//             if (!isValidSquare(numbers, rowIndex, colIndex)) {
//                 return false
//             }
//         })
//     })
//     return true
// }

// const arraysEqual = (array1, array2) => {
//     for (let i = 0; i < 9; ++i) {
//         if (array1[i] !== array2[i]) return false;
//     }
//     return true;
// }

export const exportedForTesting = {
    isValidRowPlacement,
    isValidColPlacement,
    isValidSquarePlacement,
    isPossiblePlacement,
    isSolvable
    // isValidSolution
}

// export default isSolvable
