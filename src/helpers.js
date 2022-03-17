// converts a 2D array of string values to integer values
export const stringToInt = (board) => {
    return (
        board.map(row => row.map(n => {
            return n === '' ? 0 : parseInt(n, 10)
        }))
    )
}
