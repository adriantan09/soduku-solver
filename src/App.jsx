import { useState } from 'react'
import styled from 'styled-components'
import Row from './Row.jsx'
import { solve } from './solve.js'
import { isValidBoard } from './validator.js'
import { stringToInt } from './helpers.js'

const App = () => {
  const [isValid, setIsValid] = useState(true)
  const [numbers, setNumbers] = useState(
    Array(9).fill().map(()=>Array(9).fill(''))
  )
    
  const handleChange = (e, rowIndex, colIndex) => {
    let copy = numbers.map(arr => { return arr.slice() })

    copy[rowIndex][colIndex] = e.target.value
    setNumbers(copy)

    copy = stringToInt(copy)
    setIsValid(isValidBoard(copy))
  }

  const handleReset = () => {
    setNumbers(Array(9).fill().map(()=>Array(9).fill('')))
  }

  const handleInput = (numbers) => {
    numbers = stringToInt(numbers)

    let solution = solve(numbers)
    solution = solution.map(row => row.map(String))
    setNumbers(solution)
  }

  return (
    <Container>
      <h1>Sudoku Solver</h1>

      {[...Array(9)].map((x, i) => (
        <Row
          key={i}
          rowIndex={i}
          setNumbers={handleChange}
          numbers={numbers[i]}
        /> 
      ))}

      <div>
        <Button onClick={handleReset}>Reset</Button>
        <Button 
          onClick={() => handleInput(numbers)}
          disabled={!isValid}
        >
          Solve
        </Button>
      </div>

      <a 
        href="https://github.com/adriantan09/sudoku-solver" 
        target="_blank"
        rel="noopener noreferrer"
      >
        About
      </a>
    </Container>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (prefers-color-scheme: light) {
    h1, label, p, a { color: black; }
    background-color: #FFFBFB;
  }

  @media (prefers-color-scheme: dark) {
    h1, label, p, a { color: white; }
    background-color: #282c34;
  }
`

const Button = styled.button`
  font-size: 12pt;
  margin: 10px 5px 0 5px;
  line-height: 32px;
  padding: 0 20px;
  cursor: pointer;
  color: #000;
  background: #fff;
  border-radius: 5px;

  :disabled {
    opacity: 0.6;
  }
`
