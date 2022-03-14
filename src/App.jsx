import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Row from './Row.jsx'
import { solve } from './solve.js';
import { testBoard, unsolvableBoard } from './data.js';

function App() {
  const [numbers, setNumbers] = useState(
    Array(9).fill().map(()=>Array(9).fill(''))
  )

  const handleChange = (e, row, col) => {
    numbers[row][col] = e.target.value
    setNumbers(numbers)
  }

  const handleReset = () => {
    setNumbers(Array(9).fill().map(()=>Array(9).fill('')))
    document.querySelectorAll('input').forEach(i => i.value = '')
  }

  const handleInput = (numbers) => {
    // convert input to integer
    numbers = numbers.map(row => row.map(n => {
      return n !== '' ? parseInt(n, 10) : 0
    }))

    let temp = solve(numbers)
    temp = temp.map(row => row.map(String))
    setNumbers(temp)
    console.log('SOLVING')
    console.table(numbers)
    // solve(numbers)
  }

  useEffect(() => {
    let temp = testBoard.map(function(arr) {
      return arr.slice();
    });

    temp = testBoard.map(row => row.map(String))
    console.log('BEFORE')
    console.table(temp)
    setNumbers(temp)
  }, [])

  return (
    <Container>
      <h1>Sudoku Solver</h1>

      {[...Array(9)].map((x, i) => (
        <Row
          key={i}
          rowIndex={i}
          setNumbers={handleChange}
          row={numbers[i]}
        /> 
      ))}

      <div>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={() => handleInput(numbers)}>Solve</Button>
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
`
