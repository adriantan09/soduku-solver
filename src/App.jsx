import { useState } from 'react';
import styled from 'styled-components'
import Row from './Row.jsx'

function App() {
  const [numbers, setNumbers] = useState(
    Array(9).fill().map(()=>Array(9).fill(''))
  )

  const handleChange = (e, row, col) => {
    console.log('change')
    numbers[row][col] = e.target.value
    setNumbers(numbers)
    console.log(numbers)
  }

  const handleReset = () => {
    setNumbers(Array(9).fill().map(()=>Array(9).fill('')))
    document.querySelectorAll('input').forEach(i => i.value = '')
  }

  const solve = () => {
    console.log('solving')
    console.log(numbers)
  }

  return (
    <Container>
      <h1>Sudoku Solver</h1>

      {[...Array(9)].map((x, i) => (
        <Row
          key={i}
          rowIndex={i}
          setNumbers={handleChange}
        /> 
      ))}

      <div>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={solve}>Solve</Button>
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
